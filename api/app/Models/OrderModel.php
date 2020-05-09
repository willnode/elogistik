<?php namespace App\Models;

use CodeIgniter\Validation\Exceptions\ValidationException;
use Config\Database;

class OrderModel extends BaseModel
{
	protected $table = 'order';
	protected $primaryKey = 'order_id';
	protected $indexable = [ 'order_status' ];
	protected $searchable = [ 'order_nama', 'order_id' ];
	protected $select = [
		"CONCAT('BLS', LPAD(order_id, 4, '0')) AS order_resi",
		'order_id', 'order_retail',
		'order_login', 'order_nama',
		'order_berat', 'order_kg', 'order_p',
		'order_l', 'order_t',
		'order_kind', 'order_price',
		'order_payment', 'order_status', 'order_qty',
		'order_updated','order_created',
		'order_recipient_name',
		'order_recipient_hp',
		'order_recipient_address',
	];
	protected $allowedFields = [
		'order_retail', 'order_nama',
		'order_kg', 'order_p',
		'order_l', 'order_t',
		'order_kind', 'order_payment', 'order_qty',
		'order_recipient_name',
		'order_recipient_hp',
		'order_recipient_address',
	];
	protected $fileUploadRules = [
		'order_payment' => ['types' => ['jpg', 'jpeg', 'png', 'bmp'], 'folder'=>'payment']
	];
	protected $validationRules = [];
	private $login;

	// 'order','bayar','tunggu','angkut','kirim','sampai','diterima'

	protected function executeBeforeExecute($event)
	{
		extract($event, EXTR_REFS);

		if ($method === DELETE)
			$event['response'] = load_405();
		$this->login = $request->login;
		if ($this->login->data->role === 'user') {
			if ($method === UPDATE) {
				$this->allowedFields = ['order_payment', 'order_kind'];
			}
			$builder->where('order_login', $this->login->current_id ?? 0);
		} else {
			$this->allowedFields[] = 'order_status';

		}
		if ($method === GET) {
			if ($request->getGet('archive')) {
				$builder->where('order_status', 'diterima');
			} else {
				$builder->where('order_status !=', 'diterima');
			}
		}
		return $event;
	}


	protected function executeAfterFind($event) {
		if (isset($event['id'])) {
			$event['data']['order_retail'] =
			get_values_at('retail', ['retail_id' => $event['data']['order_retail']]);
			$event['data']['order_login'] =
			get_values_at('login', ['login_id' => $event['data']['order_login']], [
				'login_id', 'name', 'email', 'hp'
			]);
		}
		return $event;
	}

	protected function executeBeforeChange($event)
	{
		extract($event, EXTR_REFS);

		if ($method !== DELETE) {
			if ($this->login->data->role === 'user') {
				$data['order_login'] = $this->login->current_id;
				if ($method === UPDATE && $data['order_payment']) {
					$data['order_status'] = 'bayar';
				}
			}
			if ($method === CREATE && isset($data['order_retail'])) {
				$retail = Database::connect()->table('retail')->where('retail_id', $data['order_retail'])->get()->getRow();
				if ($retail) {
					$qty = $data['order_qty'];
					if ($qty < 1) {
						throw new ValidationException("Too skinny");
					}
					$volume = ($data['order_p'] ?? 0) *( $data['order_l'] ?? 0) * ($data['order_t'] ?? 0);
					$berat = max($data['order_kg'] ?? 0, $volume / ($retail->retail_jalur === 'Udara' ? 6000 : 4000));
					$harga = (max(100 / $qty, $berat) * $retail->retail_perkg) * $qty;
					$data['order_berat'] = $berat;
					$data['order_price'] = $harga;
				} else {
					throw new ValidationException("Not Found");
				}
			}
		}
		return $event;
	}
	protected function executeAfterChange($event)
	{
		extract($event, EXTR_REFS);

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
		$order = get_values_at('order', ['order_id' => $id]);
		$to_admin = $order->order_status === 'bayar';
		$retail = get_values_at('retail', ['retail_id' => $order->order_retail]);
		$login = get_values_at('login', ['login_id' => $order->order_login]);
		$email = \Config\Services::email();

		$email->setFrom('noreply@bestlogisticsurabaya.com', 'Best Logistic Surabaya');
		$email->setTo($to_admin ? $this->adminEmails() : $login->email);

		$email->setSubject('Order Update | Best Logistic Surabaya');
		$email->setMessage(view('order', [
			'nama' => $login->name,
			'resi' => $id,
			'barang' => $order->order_nama,
			'kirim' => $retail->retail_jalur.' ('.$retail->retail_jasa.')',
			'tujuan' => $retail->retail_kab.' - '.$retail->retail_prov,
			'to_admin' => $to_admin,
			'status' => [
				'order' => "Menunggu Struk Pembayaran",
				'bayar' => "Menunggu Pembayaran Diverifikasi",
				'tunggu' => "Menunggu Barang dikirim ke Drop Point",
				'angkut' => "Barang sedang di proses untuk dikirim",
				'kirim' => "Barang sedang proses pengiriman",
				'sampai' => "Barang sudah sampai di tujuan",
				'diterima' => "Barang sudah di terima",
			][$order->order_status],
		]));

		$result = $email->send();
		if (!$result) {
			load_error($email->printDebugger())->pretend(false)->send();
			exit;
		}
	}

}