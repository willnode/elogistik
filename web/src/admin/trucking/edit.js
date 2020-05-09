import React, { useState } from 'react';
import Page from 'widget/page';
import {
	Form, Input, Submit, BackButton,
	Select,
	File
} from 'widget/controls';
import { useParams } from 'react-router-dom';
import { doReload, history } from 'main/Helper';
import FormLabel from '@material-ui/core/FormLabel';
import { statusDict } from 'user/trucking/detail';

export default function () {
	const id = useParams().id || 0;
	const [d, setData] = useState(null);
	const data = (d && d.data);

	return (
		<Page maxWidth="sm" className="paper" src={'admin/trucking/' + id} dataCallback={setData}>
			<h1>Cek Order BLST{String(id).padStart(4, '0')}</h1>
			{!data ? '' : (
				<Form action={"admin/trucking/" + id} redirect={id > 0 ? doReload : (json) => history().push('/admin/trucking/edit/' + json.id)}>
					<h2>Biodata Pemesan</h2>
					<Input value={data.trucking_login.name} readOnly label="Nama" />
					<Input value={data.trucking_login.email} readOnly label="Email" />
					<Input value={data.trucking_login.hp} readOnly label="HP" />
					<h2>Info Order</h2>
					<Input value={data.trucking_barang} readOnly label="Nama Barang" />
					<Input value={data.trucking_armada} readOnly label="Armada Pilihan" />
					<FormLabel component="legend">Start Rute</FormLabel>
					<Input value={data.trucking_start} multiline readOnly label="Mulai Rute" />
					<FormLabel component="legend">Rute Selanjutnya</FormLabel>
					{
						data.trucking_tujuan.map((x, i) => <Input key={i} value={x.tujuan_alamat} multiline readOnly />)
					}
					<File defaultValue={data.trucking_payment} folder="payment" readOnly label="Struk Pembayaran" />

					<h2 children="Edit Status" />
					<Input name="trucking_price" label="Harga Fix" defaultValue={data.trucking_price} />
					<Select name="trucking_status" label="Status" defaultValue={data.trucking_status}
						options={statusDict} />
					<Submit />
				</Form>)}
			<BackButton />
		</Page>)
}
