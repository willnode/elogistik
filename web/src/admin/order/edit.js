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
			<h1>WIP</h1>
			{!data ? '' : (
				<Form action={"admin/order/" + id} redirect={id > 0 ? doReload : (json) => history().push('/admin/order/edit/'+json.id)}>
					<h2 children="Biodata" />
					<Input value={data.order_login.name} readOnly label="Nama"/>
					<Input value={data.order_login.email} readOnly label="Email"/>
					<Input value={data.order_login.hp} readOnly label="HP"/>
					<h2 children="Tujuan" />
					<Input value={data.order_retail.retail_jalur} readOnly label="Jalur"/>
					<Input value={data.order_retail.retail_prov} readOnly label="Provinsi"/>
					<Input value={data.order_retail.retail_kab} readOnly label="Kabupaten"/>
					<Input value={data.order_retail.retail_jasa} readOnly label="Jasa"/>
					<Input value={data.order_retail.retail_perkg} readOnly label="Per KG"/>
					<Input value={data.order_retail.retail_kubikasi} readOnly label="Per M3"/>
					<h2 children="Orderan" />
					<Input value={data.order_nama} readOnly label="Nama"/>
					<Input value={data.order_berat + ' KG'} readOnly label="Berat"/>
					<Input value={formatRupiah(data.order_price)} readOnly label="Harga (Full)"/>
					<Input value={data.order_kind || ''} readOnly label="Jenis Pembayaran"/>
					<File defaultValue={data.order_payment} folder="payment" readOnly label="Struk Pembayaran"/>

					<h2 children="Edit Status" />
					<Select name="order_status" label="Status" defaultValue={data.order_status}
					options={statusDict} />
					<Submit />
				</Form>)}
			<BackButton />
		</Page>)
}
