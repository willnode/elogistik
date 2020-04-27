import React, { useState } from 'react';
import Page from '../../widget/page';
import {
	Form, Input, Submit, BackButton,
	Select,
	File
} from '../../widget/controls';
import { useParams } from 'react-router-dom';
import { doReload, history, formatRupiah } from '../../main/Helper';

import { statusDict } from '../../user/order/detail';

export default function () {
	const id = useParams().id || 0;
	const [d, setData] = useState(null);
	const data = (d && d.data);

	return (
		<Page maxWidth="sm" className="paper" src={'admin/order/' + id} dataCallback={setData}>
			<h1>Cek Order BLS{String(id).padStart(4, '0')}</h1>
			{!data ? '' : (
				<Form action={"admin/order/" + id} redirect={id > 0 ? doReload : (json) => history().push('/admin/order/edit/'+json.id)}>
					<h2>Biodata Pemesan</h2>
					<Input value={data.order_login.name} readOnly label="Nama"/>
					<Input value={data.order_login.email} readOnly label="Email"/>
					<Input value={data.order_login.hp} readOnly label="HP"/>
					<h2>Info Barang Order</h2>
					<Input value={`${data.order_nama}`} readOnly label="Nama Barang" />
					<Input value={`${data.order_retail.retail_jalur} (${data.order_retail.retail_jasa})`} readOnly label="Jalur Pilihan" />
					<Input value={`${data.order_retail.retail_prov} - ${data.order_retail.retail_kab}`} readOnly label="Lokasi Tujuan" />
					<Input value={data.order_retail.retail_perkg} readOnly label="Retail Per KG"/>
					<h2>Orderan</h2>
					<Input value={data.order_berat + ' KG * ' + data.order_qty} readOnly label="Berat dan Qty"/>
					<Input value={data.order_kind || ''} readOnly label="Jenis Pembayaran"/>
					<Input value={formatRupiah(data.order_price)} readOnly label="Harga (Full)"/>
					{data.order_kind !== '100' && <Input value={formatRupiah(data.order_price * data.order_kind / 100)} readOnly label="Harga (DP)"/>}
					{data.order_kind !== '100' && <Input value={formatRupiah(data.order_price * (100 - data.order_kind) / 100)} readOnly label="Harga (Sudah Sampai)"/>}
					<File defaultValue={data.order_payment} folder="payment" readOnly label="Struk Pembayaran"/>

					<h2 children="Edit Status" />
					<Select name="order_status" label="Status" defaultValue={data.order_status}
					options={statusDict} />
					<Submit />
				</Form>)}
			<BackButton />
		</Page>)
}
