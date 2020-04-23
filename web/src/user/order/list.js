import React from 'react';
import { RemoteTable } from '../../widget/controls';
import { statusDict } from './detail';

export default function () {
	return <RemoteTable
		title="Daftar Order"
		src="user/order"
		itemKey="order_id"
		itemLabel="Order"
		predefinedActions={['add', 'detail']}
		columns={{
			order_nama: 'Nama Barang',
			order_status: {
				title: 'Status Order',
				render: row => (
					statusDict[row.order_status]
				),
			},
		}} />
}
