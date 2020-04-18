import React from 'react';
import { RemoteTable } from '../../widget/controls';
import { statusDict } from '../../user/order/detail';

export default function () {
	return <RemoteTable
		title="Daftar Order"
		src="admin/order"
		itemKey="order_id"
		itemLabel="Order"
		predefinedActions={['add', 'edit']}
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
