import React from 'react';
import { RemoteTable } from 'widget/controls';
import { statusDict } from 'user/trucking/detail';

export default function () {
	return <RemoteTable
		key={window.location.search}
		title="Daftar Sewa Truk"
		src="admin/trucking"
		itemKey="trucking_id"
		itemLabel="Order"
		predefinedActions={['archive', 'edit']}
		columns={{
			trucking_barang: 'Nama Barang',
			trucking_status: {
				title: 'Status Sewa',
				render: row => (
					statusDict[row.trucking_status]
				),
			},
			updated_at: 'Terakhir Update',
		}} />
}
