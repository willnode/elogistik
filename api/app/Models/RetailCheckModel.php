<?php

namespace App\Models;

class RetailCheckModel extends BaseModel
{
	protected $table = 'retail';
	protected $primaryKey = 'retail_id';
	protected $indexable = ['retail_jalur', 'retail_prov', 'retail_kab', 'retail_jasa'];
	protected $select = [
		'retail_id',
		'retail_jalur', 'retail_prov', 'retail_kab',
		'retail_perkg', 'retail_kubikasi', 'retail_jasa'
	];

	protected function executeBeforeExecute($event)
	{
		if ($event['method'] !== GET)
			$event['response'] = load_405();
		return $event;
	}
}
