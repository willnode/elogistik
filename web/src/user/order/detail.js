import React, { useState } from 'react';
import Page from '../../widget/page';
import {
	Form, Input, Submit, BackButton,
	CommandButton, FlexGroup, File, Select
} from '../../widget/controls';
import { useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { doReload, history } from '../../main/Helper';

const statusDict = {
	bayar: "Menunggu Proses Pembayaran",
	tunggu: "Menunggu Barang ke Kantor",
	angkut: "Barang sedang di proses",
	kirim: "Barang sedang di kirim",
	sampai: "Barang sudah sampai",
	diterima: "Barang sudah diterima",
}
export {
	statusDict
}
export default function () {
	const id = useParams().id || 0;
	const [d, setData] = useState(null);
	const data = (d && d.data);


	return (
		<Page noStyle={false} maxWidth="md" src={'user/order/' + id} dataCallback={setData}>
			<h1>Masih WIP</h1>
			{!data ? '' : (
				<Form action={"user/order/" + id} redirect={id > 0 ? doReload : (json) => history().push('/user/order/detail/' + json.id)}>
					<FlexGroup marginY={2} label="Status Barang">{statusDict[data.order_status]}</FlexGroup>
					{
						data.order_status == 'bayar' && <>
							<Select name="order_kind" label="Jenis Pembayaran"
								defaultValue={data.order_kind}
								options={{
									'50': 'DP 50%',
									'70': 'DP 70%',
									'100': 'Bayar Penuh',
								}} required />
							<File name="order_payment" label="Struk" folder="payment"
								defaultValue={data.order_payment}
								required={!data.order_payment} />
							<Submit />
						</>
					}
				</Form>)}
			<BackButton />
		</Page>)
}
