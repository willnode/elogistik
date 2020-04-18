<?php namespace App\Models;

use CodeIgniter\Validation\Exceptions\ValidationException;
use Config\Database;

class OrderModel extends BaseModel
{
	protected $table = 'order';
	protected $primaryKey = 'order_id';
	protected $select = [
		'order_id', 'order_retail',
		'order_login', 'order_nama',
		'order_berat', 'order_kg', 'order_p',
		'order_l', 'order_t',
		'order_kind', 'order_price',
		'order_payment', 'order_status',
	];
	protected $allowedFields = [
		'order_retail', 'order_nama',
		'order_kg', 'order_p',
		'order_l', 'order_t',
		'order_kind', 'order_payment', 'order_qty'
	];
	protected $fileUploadRules = [
		'order_payment' => ['types' => ['jpg', 'jpeg', 'png', 'bmp'], 'folder'=>'payment']
	];
	protected $validationRules = [];
	private $login;

	protected function executeBeforeExecute($event)
	{
		extract($event, EXTR_REFS);

		if ($method === DELETE)
			$event['response'] = load_405();
		$this->login = $request->login;
		if ($this->login->data->role === 'user') {
			if ($method === UPDATE) {
				$this->allowedFields = ['order_payment'];
			}
			$builder->where('order_login', $this->login->current_id ?? 0);
		} else {
			$this->allowedFields[] = 'order_status';
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
			}
			if (isset($data['order_retail'])) {
				$retail = Database::connect()->table('retail')->where('retail_id', $data['order_retail'])->get()->getRow();
				if ($retail) {
					$volume = $data['order_p'] * $data['order_l'] * $data['order_t'];
					$berat = max($data['order_kg'], $volume / ($retail->retail_jalur === 'Udara' ? 6000 : 4000));
					$volume = $volume * ($retail->retail_kubikasi / 100000.0);
					if ($berat < 100) {
						throw new ValidationException("Too skinny");
					}
					$harga = ($berat * $retail->retail_perkg + $retail->retail_kubikasi) * $data['order_qty'];
					$data['order_berat'] = $berat;
					$data['order_price'] = $harga;
				} else {
					throw new ValidationException("Not Found");
				}
			}
		}
		return $event;
	}
}