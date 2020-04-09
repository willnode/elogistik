<?php

namespace App\Models;

class RetailCheckModel extends BaseModel
{
	protected $table = 'retail';
	protected $primaryKey = 'retail_id';
	protected $indexable = ['retail_jalur', 'retail_provinsi', 'retail_kabupaten'];
	protected $select = [
		'retail_id',
		'retail_jalur', 'retail_provinsi', 'retail_kabupaten',
		'retail_perkg', 'retail_kubikasi'
	];

	protected function executeBeforeExecute($event)
	{
		if ($event['method'] !== GET)
			$event['response'] = load_405();
		return $event;
	}
}
