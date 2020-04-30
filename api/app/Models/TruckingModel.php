<?php namespace App\Models;

use CodeIgniter\Validation\Exceptions\ValidationException;
use Config\Database;
use Config\Services;

class TruckingModel extends BaseModel
{
	protected $table = 'trucking';
	protected $primaryKey = 'trucking_id';
	protected $indexable = [ 'trucking_status' ];
	protected $select = [
		'trucking_id', 	'trucking_login',
		'trucking_barang', 'trucking_armada',
		'trucking_start', 'trucking_status',
		'trucking_price', 'trucking_payment',
		'created_at', 'updated_at'
	];
	protected $allowedFields = [
		'trucking_barang', 'trucking_armada',
		'trucking_start',
	];
	protected $fileUploadRules = [
		'trucking_payment' => ['types' => ['jpg', 'jpeg', 'png', 'bmp'], 'folder'=>'payment']
	];
	protected $validationRules = [];
	private $login;

	// 'antri','order','bayar','tunggu','angkut','kirim','sampai','diterima'

	protected function executeBeforeExecute($event)
	{
		extract($event, EXTR_REFS);

		$this->login = $request->login;
		if ($this->login->data->role === 'user') {
			if ($method === DELETE) {
				$event['response'] = load_405();
			}
			if ($method === UPDATE) {
				$this->allowedFields = ['trucking_payment'];
			}
			$builder->where('trucking_login', $this->login->current_id ?? 0);
		} else {
			$this->allowedFields[] = 'trucking_status';
			$this->allowedFields[] = 'trucking_price';
		}
		if ($method === GET) {
			if ($request->getGet('archive')) {
				$builder->where('trucking_status', 'diterima');
			} else {
				$builder->where('trucking_status !=', 'diterima');
			}
		}
		return $event;
	}

	protected function executeAfterFind($event) {
		if (isset($event['id'])) {
			$event['data']['trucking_login'] =
			get_values_at('login', ['login_id' => $event['data']['trucking_login']], [
				'login_id', 'name', 'email', 'hp'
			]);
			$event['data']['trucking_tujuan'] =
			$this->db->table('elogistik_trucking_tujuan')
				->select(['tujuan_index', 'tujuan_alamat'])
				->where(['trucking_id' => $event['data']['trucking_id']])
				->orderBy('tujuan_index')->get()->getResult();
		}
		return $event;
	}

	protected function executeBeforeChange($event)
	{
		extract($event, EXTR_REFS);

		if ($method !== DELETE) {
			if ($this->login->data->role === 'user') {
				$data['trucking_login'] = $this->login->current_id;
				if ($method === UPDATE && $data['trucking_payment']) {
					$data['trucking_status'] = 'bayar';
				}
			}
		}
		return $event;
	}
	protected function executeAfterChange($event)
	{
		extract($event, EXTR_REFS);

		if ($method === CREATE) {
			foreach (Services::request()->getPost('tujuan') as $key => $value) {
				$this->db->table('trucking_tujuan')->insert([
					'trucking_id' => $id,
					'tujuan_index' => $key,
					'tujuan_alamat' => $value,
				]);
			}
		}
		if ($method !== DELETE) {
			$this->sendEmail(is_array($id) ? $id[0] : $id);
		}
	}

	protected function adminEmails() {
		return array_map(function ($x) {
			return $x->email;
		}, $this->db->table('login')->select('email')->where('role', 'admin')->get()->getResult());
	}

	protected function sendEmail($id)
	{
		$trucking = get_values_at('trucking', ['trucking_id' => $id]);
		$to_admin = $trucking->trucking_status === 'bayar' || $trucking->trucking_status === 'antri';
		$login = get_values_at('login', ['login_id' => $trucking->trucking_login]);
		$email = \Config\Services::email();

		$email->setFrom('noreply@bestlogisticsurabaya.com', 'Best Logistic Surabaya');
		$email->setTo($to_admin ? $this->adminEmails() : $login->email);

		$email->setSubject('Order Update | Best Logistic Surabaya');
		$email->setMessage(view('truck', [
			'nama' => $login->name,
			'resi' => $id,
			'barang' => $trucking->trucking_barang,
			'kirim' => 'Trucking',
			'tujuan' => $trucking->trucking_start,
			'to_admin' => $to_admin,
			'status' => [
				'antri' => "Menunggu Pengefikan Harga",
				'trucking' => "Menunggu Struk Pembayaran",
				'bayar' => "Menunggu Pembayaran Diverifikasi",
				'tunggu' => "Menunggu Barang dikirim ke Drop Point",
				'angkut' => "Barang sedang di proses untuk dikirim",
				'kirim' => "Barang sedang proses pengiriman",
				'sampai' => "Barang sudah sampai di tujuan",
				'diterima' => "Barang sudah di terima",
			][$trucking->trucking_status],
		]));

		$result = $email->send();
		if (!$result) {
			load_error($email->printDebugger())->pretend(false)->send();
			exit;
		}
	}

}