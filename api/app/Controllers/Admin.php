<?php namespace App\Controllers;

use App\Models\OrderModel;
use App\Models\ProfileModel;
use App\Models\TruckingModel;
use App\Models\UserModel;

class Admin extends BaseController
{
	const ROLE = 'admin';

	public function index()
	{
		return load_info([
			'routes'=>[
				'/admin/user/',
				'/admin/order/',
				'/admin/profile/',
			],
		]);
	}

	public function profile()
	{
		return (new ProfileModel())->execute($this->login->current_id);
	}

	public function user($id = NULL)
	{
		return (new UserModel())->execute($id);
	}

	public function order($id = NULL)
	{
		return (new OrderModel())->execute($id);
	}

	public function trucking($id = NULL)
	{
		return (new TruckingModel())->execute($id);
	}
}