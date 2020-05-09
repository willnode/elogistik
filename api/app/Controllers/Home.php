<?php

namespace App\Controllers;

use App\Models\LoginModel;
use App\Models\RegisterModel;
use App\Models\RetailCheckModel;
use Config\Database;
use Config\Mimes;

class Home extends BaseController
{

	public function index()
	{
		return load_info([
			'routes' => [
				'/login/',
				'/forgot/',
				'/register/',
				'/admin/',
				'/check_retail/',
				'/user/',
			],
		]);
	}

	public function login()
	{
		$login = new LoginModel();
		if ($login->data) {
			unset_keys($login->data, [
				'password', 'otp', 'created_at', 'updated_at'
			]);
			return load_ok([
				'login' => $login->data
			]);
		} else {
			return load_401('Wrong Authentication', 'guest');
		}
	}

	protected function sendForgotEmail($login, $otp)
	{
		$email = \Config\Services::email();

		$email->setFrom('noreply@bestlogisticsurabaya.com', 'Best Logistic Surabaya');
		$email->setTo($login->email);

		$email->setSubject('Reset Ulang Password | Best Logistic Surabaya');
		$email->setMessage(view('forgot', [
			'nama' => $login->name,
			'otp' => $otp,
		]));

		$result = $email->send();
		if (!$result) {
			load_error($email->printDebugger())->pretend(false)->send();
			exit;
		}
	}
	public function forgot()
	{
		if ($this->request->getMethod() === POST && $this->login->current_id) {
			$action = $this->request->getPost('action');
			$login = Database::connect()->table('login')->where('login_id', $this->login->current_id)->get()->getRow();
			if (!$action) {
				// TODO: If OTP == NULL, send email.
				if (!$login->otp) {
					$otp = generate_pin();
					Database::connect()->table('login')
						->where('login_id', $this->login->current_id)
						->update(['otp' => $otp]);
					$this->sendForgotEmail($login, $otp);
				}
				return load_ok("Akun ditemukan");
			}
			if ($action === 'request') {
				$otp = generate_pin();
				Database::connect()->table('login')
					->where('login_id', $this->login->current_id)
					->update(['otp' => $otp]);
				$this->sendForgotEmail($login, $otp);
				return load_ok('Token terkirim');
			} else if ($action === 'response') {
				$input_otp = $this->request->getPost('otp');
				if ((time() - strtotime($login->updated_at)) > 60 * 60 * 24 * 7) {
					return load_404('Token expired');
				} else if ($input_otp == $login->otp) {
					$input_pw = $this->request->getPost('password');
					if ($input_pw && strlen($input_pw) >= 8) {
						$update = ['password' => $input_pw, 'otp' => NULL];
						control_password_update($update);
						Database::connect()->table('login')
							->where('login_id', $this->login->current_id)
							->update($update);
						return load_ok('Berhasil menyimpan password!');
					} else {
						return load_ok('Token benar. Mohon masukkan password baru.');
					}
				} else {
					return load_405('OTP Salah');
				}
			} else {
				return load_405("Wrong Action");
			}
		} else {
			return load_405("Akun tak ditemukan");
		}
	}

	public function register()
	{
		return (new RegisterModel())->execute(NULL);
	}

	public function check_retail($id = NULL)
	{
		return (new RetailCheckModel())->execute($id);
	}

	public function not_found()
	{
		// Bug, returning response don't send anything.
		$output = load_404();
		if (is_string($output)) {
			echo $output;
		} else {
			$output->pretend(false)->send();
		}
	}

	public function hash($hash)
	{
		echo password_hash($hash, PASSWORD_BCRYPT);
		exit;
	}

	public function uploads($folder, $file)
	{
		$path = WRITEPATH . 'uploads' . DIRECTORY_SEPARATOR . $folder . DIRECTORY_SEPARATOR . $file;
		if (file_exists($path)) {
			$ext = pathinfo($path, PATHINFO_EXTENSION);
			header('Content-Type: ' . (new Mimes())->guessTypeFromExtension($ext));
			echo file_get_contents($path);
		} else {
			$this->not_found();
		}
		exit;
	}



	//--------------------------------------------------------------------

}
