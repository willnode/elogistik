import React, { useState } from 'react';
import Page from '../../widget/page';
import {
	Form, Submit, BackButton, File, Select, Input
} from '../../widget/controls';
import { useParams } from 'react-router-dom';
import { doReload, history, formatRupiah } from '../../main/Helper';
import ReceiptIcon from '@material-ui/icons/Receipt';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocalShipping from '@material-ui/icons/LocalShipping';
import RedeemIcon from '@material-ui/icons/Redeem';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

const statusDict = {
	order: "Menunggu Struk Pembayaran",
	bayar: "Menunggu Pembayaran Diverifikasi",
	tunggu: "Menunggu Barang dikirim ke Drop Point",
	angkut: "Barang sedang di proses untuk dikirim",
	kirim: "Barang sedang proses pengiriman",
	sampai: "Barang sudah sampai di tujuan",
	diterima: "Barang sudah di terima",
}
const statusIcon = {
	order: ReceiptIcon,
	bayar: HourglassEmptyIcon,
	tunggu: LocationOnIcon,
	angkut: LocalOfferIcon,
	kirim: LocalShipping,
	sampai: RedeemIcon,
	diterima: CheckCircleIcon,
}

function OrderSubmit({ data }) {
	const [dp, setDp] = React.useState(data.order_kind || '100');
	return <>
		<p>Kami menerima pembayaran penuh atau DP 50% dan 70%</p>
		<Select name="order_kind" label="Jenis Pembayaran"
			options={{
				'50': 'DP 50%',
				'70': 'DP 70%',
				'100': 'Bayar Penuh',
			}} value={dp} onChange={(e) => setDp(e.target.value)} required />
		<p>Silakan membayar ke rekening berikut</p>
		<p>BCA: <b>7480181268</b><br />
			Sejumlah: <b>{formatRupiah(data.order_price * dp / 100)}</b><br />
			Atas Nama: <b>Rakhmat Benny Febrianto</b></p>
		<p>Mohon upload struk pembayaran agar dapat diproses</p>
		<File name="order_payment" label="Struk" folder="payment"
			defaultValue={data.order_payment}
			required={!data.order_payment} />
		<Submit /></>
}

const statusOrder = ['order', 'bayar', 'tunggu', 'angkut', 'kirim', 'sampai', 'diterima']
export {
	statusDict, statusIcon, statusOrder
}
function ListItemOrder({ color, i, ok }) {
	const Icon = statusIcon[statusOrder[i]];
	const text = statusDict[statusOrder[i]];
	return <ListItem>
		<ListItemIcon><Icon fontSize="large" color={color} /></ListItemIcon>
		<ListItemText ><Typography color={color}>{ok ? <><s>{text}</s>&nbsp;<CheckCircleIcon style={{float: 'right'}} fontSize="small" /></> : text}</Typography></ListItemText>
	</ListItem>
}
export default function () {
	const id = useParams().id || 0;
	const [d, setData] = useState(null);
	const data = (d && d.data);


	return (
		<Page className="paper center" maxWidth="sm" src={'user/order/' + id} dataCallback={setData}>

			{data && (
				<Form action={"user/order/" + id} redirect={id > 0 ? doReload : (json) => history().push('/user/order/detail/' + json.id)}>
					<h1>Cek Status Order BLS{String(id).padStart(4, '0')}</h1>
					<Page className="paper justify">
						<h2>Info Barang</h2>
						<Input value={`${data.order_nama}`} readOnly label="Nama Barang" />
						<Input value={`${data.order_retail.retail_jalur} (${data.order_retail.retail_jasa})`} readOnly label="Jalur Pilihan" />
						<Input value={`${data.order_retail.retail_prov} - ${data.order_retail.retail_kab}`} readOnly label="Lokasi Tujuan" />
					</Page>
					<Page className="paper justify">
						<h2>Status Order</h2>
						<List>
							{
								((order) => {
									let index = statusOrder.indexOf(order);
									let result = [];
									for (let i = 0; i <= index; i++) {
										if (i === index) {
											result.push((
												<ListItemOrder key={index} color="primary" i={i} />
											))
										} else {
											result.push((
												<ListItemOrder key={index} color="secondary" i={i} ok />
											))
										}
									}
									return result;
								})(data.order_status)
							}
						</List>
					</Page>
					{
						data.order_status === 'order' && <Page className="paper justify">
							<Alert severity="warning">
							<AlertTitle>Aksi diperlukan</AlertTitle>
							Anda harus membayar terlebih dahulu agar pemesanan dapat diproses</Alert>
							<OrderSubmit data={data} />
						</Page>
					}
					{
						data.order_status === 'tunggu' && <Page className="paper center">
							<Alert severity="warning">
								<AlertTitle>Aksi diperlukan</AlertTitle>
								Mohon kirim barang ke Drop Point
							</Alert>
							<p>Lokasi Drop Point: </p>
							{<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1176.442620715147!2d112.7321577531674!3d-7.346538647374439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e5c8a23f4e13%3A0x7f32129b25bad9b2!2sBEST%20LOGISTIC%20SURABAYA!5e0!3m2!1sid!2sid!4v1586505310484!5m2!1sid!2sid"
								title="Maps" width="100%" height="300" frameBorder="0" style={{ border: 0 }} allowFullScreen tabIndex="0"></iframe>}
						</Page>
					}
					{
						data.order_status === 'sampai' && <Page className="paper center">
							<p></p>
							<Alert severity="warning">
								<AlertTitle>Aksi diperlukan</AlertTitle>
								Mohon ambil barang di Pickup Point
							</Alert>
							<p>Lokasi Pickup Point: </p>
						</Page>
					}
				</Form>)}
			<BackButton />
		</Page>)
}
