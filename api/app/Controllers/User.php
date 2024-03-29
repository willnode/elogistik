<?php namespace App\Controllers;

use App\Models\ProfileModel;
use App\Models\OrderModel;
use App\Models\TruckingModel;

class User extends BaseController
{
	const ROLE = 'user';

	public function index()
	{
		return load_info([
			'routes'=>[
				'/user/order/',
				'/user/profile/',
			],
		]);
	}

	public function profile()
	{
		return (new ProfileModel())->execute($this->login->current_id);
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