<?php namespace App\Models;

class UserModel extends BaseModel
{
	protected $table = 'login';
	protected $primaryKey = 'login_id';
	protected $select = [
		'login_id', 'username',	'email', 'hp', 'name', 'avatar', 'otp'
	];
	protected $searchable = [
		'username', 'email', 'name', 'hp',
	];
	protected $allowedFields = [
		'name', 'email', 'avatar', 'hp', 'username'
	];
	protected $fileUploadRules = [
		'avatar' => ['types' => ['jpg', 'jpeg', 'png', 'bmp']]
	];
	protected $validationRules = [
		'name' => 'required',
	];

	function executeBeforeExecute($event)
	{
		$event['builder']->where('role', 'user');
		return $event;
	}

	function executeAfterChange($event)
	{
		extract($event, EXTR_REFS);
		if ($method !== DELETE) {
			$otps = get_post_updates(['otp_invoke', 'otp_revoke']);
			if (!empty($otps)) {
				if (isset($otps['otp_invoke'])) {
					$otp = generate_pin();
				} else if (isset($otps['otp_revoke'])) {
					$otp = NULL;
				}
				$this->db->table($this->table)
					->update(
						['otp' => $otp],
						[$this->primaryKey => $id]);
			}
		}
		return $event;
	}
}