import React from 'react';
import { RemoteTable } from '../../widget/controls';
import { statusDict } from './detail';

export default function () {
	return <RemoteTable
		key={window.location.search}
		title="Daftar Order Sewa Truk"
		src="user/trucking"
		itemKey="trucking_id"
		itemLabel="Order"
		predefinedActions={['archive', 'detail']}
		columns={{
			trucking_resi: 'Resi Sewa',
			trucking_barang: 'Nama Barang',
			trucking_status: {
				title: 'Status Order',
				render: row => (
					statusDict[row.trucking_status]
				),
			},

		}} />
}
