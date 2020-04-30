import React from 'react';
import { RemoteTable } from '../../widget/controls';
import { statusDict } from './detail';

export default function () {
	return <RemoteTable
		key={window.location.search}
		title="Daftar Order"
		src="user/order"
		itemKey="order_id"
		itemLabel="Order"
		predefinedActions={['archive', 'detail']}
		columns={{
			order_nama: 'Nama Barang',
			updated_at: 'Terakhir Update',
			order_status: {
				title: 'Status Order',
				render: row => (
					statusDict[row.order_status]
				),
			},
		}} />
}
