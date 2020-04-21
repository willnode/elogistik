import React from 'react';
import Page from '../widget/page';
import { Input, Form, Select, Submit, FlexGroup } from '../widget/controls';
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import { formatRupiah, login, history } from '../main/Helper';
import { useMemo } from 'react';
import Login from './login';
import { useEffect } from 'react';

function RealOrder({ id, ok, setOk }) {
	const [data, setData] = React.useState();
	const [kg, setKg] = React.useState(0);
	const [p, setP] = React.useState(0);
	const [l, setL] = React.useState(0);
	const [t, setT] = React.useState(0);
	const [mode, setMode] = React.useState('volume');
	const [qty, setQty] = React.useState(1);
	const [berat, volume] = useMemo(() => {
		let patokan = (data && data.retail_jalur === 'Udara') ? 6000 : 4000;
		let volume = p * l * t;
		return [Math.max(kg, Math.ceil(volume / patokan)), Math.ceil(volume / 1_000_000)];
	}, [data, kg, p, l, t])
	const harga = useMemo(() => {
		return data ? (berat * parseInt(data.retail_perkg) + volume * parseInt(data.retail_kubikasi)) * qty : 0;
	}, [data, qty, berat, volume]);
	useEffect(() => {
		if (ok !== Boolean(berat >= 100)) {
			setOk(Boolean(berat >= 100));
		}
	}, [ok, berat, setOk])
	return <Page src={`check_retail/${id}`} dataCallback={(x) => setData(x.data)}>
		{data && <div>
			<input type="hidden" readOnly name="order_retail" value={id} />
			<Select value={mode} options={{berat: "Berat", volume: "Volume"}} onChange={(x) => setMode(x.target.value)} />
			{
				mode === 'berat' ? <Input name="order_kg" type="number"
				inputProps={{ min: 0 }} label="Berat (KG)" value={kg} onChange={(e) => setKg(e.target.value)} />
				: <Grid container spacing={3}>
					<Grid item xs={12} sm={4}>
						<Input name="order_p" type="number" inputProps={{ min: 0 }} label="Panjang (CM)" value={p} onChange={(e) => setP(e.target.value)} />
					</Grid>
					<Grid item xs={12} sm={4}>
						<Input name="order_l" type="number" inputProps={{ min: 0 }} label="Lebar (CM)" value={l} onChange={(e) => setL(e.target.value)} />
					</Grid>
					<Grid item xs={12} sm={4}>
						<Input name="order_t" type="number" inputProps={{ min: 0 }} label="Tinggi (CM)" value={t} onChange={(e) => setT(e.target.value)} />
					</Grid>
				</Grid>
			}
			<FlexGroup label="Estimasi Harga Berat per KG" marginY={2}>
				{berat} KG &times; {formatRupiah(parseInt(data.retail_perkg))} = {formatRupiah(berat * parseInt(data.retail_perkg))}
			</FlexGroup>
			{data.retail_kubikasi > 0 && <FlexGroup label="Estimasi Harga Volume per M3" marginY={2}>
				{volume} M3 &times; {formatRupiah(parseInt(data.retail_kubikasi))} = {formatRupiah(volume * parseInt(data.retail_kubikasi))}
			</FlexGroup>}
			<Input name="order_qty" type="number" inputProps={{ min: 1 }} label="Jumlah Barang" value={qty} onChange={(e) => setQty(e.target.value)} />
			<FlexGroup label="Total Harga" marginY={2}>
				{formatRupiah(harga)}
			</FlexGroup>

			<Alert style={{margin: '1rem 0'}} severity={ok ? "info" : "warning"}>{!ok ? 'Minimal order adalah 100 KG' : 'Harga belum termasuk packing dan asuransi'}</Alert>
			{ok && <Alert style={{margin: '1rem 0'}} severity={login() ? "info" : "warning"}>{!login() ? 'Data order anda akan dimasukkan ke akun anda' : 'Anda perlu masuk untuk melanjutkan'}</Alert>}
		</div>}
	</Page>
}

const rrrrrr = (arr) => arr.reduce(function (map, [key, val]) {
	map[key] = val;
	return map;
}, {})

export default function Order() {
	const [nama, setNama] = React.useState('');
	const [jalur, setJalur] = React.useState('');
	const [jalurData, setJalurData] = React.useState();
	const [prov, setProv] = React.useState('');
	const [provData, setProvData] = React.useState();
	const [kab, setKab] = React.useState('');
	const [kabData, setKabData] = React.useState();
	const [jasa, setJasa] = React.useState('');
	const [jasaData, setJasaData] = React.useState();
	const [ok, setOK] = React.useState(false);
	return (<Page maxWidth="sm" style={{ minHeight: '600px' }}>
		<h1>Order</h1>
		<Form action="user/order" redirect={(json) => history().push('/user/order/detail/'+json.id)}>
			<Input name="order_nama" label="Nama Barang (Wajib)" value={nama} onChange={(e) => setNama(e.target.value)} />
			<Select label="Pengiriman Asal" options={{
				sby: "Surabaya",
			}} defaultValue="sby" />
			{nama && <Page src="check_retail?groupBy=retail_jalur" dataCallback={(x) => setJalurData(x.data)}>
				{jalurData && <>
					<FlexGroup label="Pengiriman Tujuan" marginTop={3} marginBottom={1} />
					<Select name="retail_jalur" label="Jalur" options={
						rrrrrr(jalurData.map(obj => [obj.retail_jalur, obj.retail_jalur]))
					} value={jalur} onChange={e => [setJalur(e.target.value), setProv('')]} />
					{jalur && <Page src={`check_retail?groupBy=retail_prov&retail_jalur=${jalur}`} dataCallback={(x) => setProvData(x.data)}>
						{provData && <><Select name="retail_prov" label="Provinsi" options={
							rrrrrr(provData.map(obj => [obj.retail_prov, obj.retail_prov]))
						} value={prov} onChange={e => [setProv(e.target.value), setKab('')]} />
							{prov && <Page src={`check_retail?groupBy=retail_kab&retail_jalur=${jalur}&retail_prov=${prov}`}
								dataCallback={(x) => setKabData(x.data)}>
								{kabData && <><Select name="retail_kab" label={jalur === 'Udara' ? 'Bandara' : 'Kota'} options={
									rrrrrr(kabData.map(obj => [jalur !== 'Udara' ? obj.retail_id : obj.retail_kab, obj.retail_kab]))
								} value={kab} onChange={e => [setKab(e.target.value), setJasa('')]} />
									{kab && (
										jalur !== 'Udara' ? <RealOrder id={kab} ok={ok} setOk={setOK} /> :
											<Page src={`check_retail?groupBy=retail_jasa&retail_jalur=${jalur}&retail_prov=${prov}&retail_kab=${kab}`}
												dataCallback={(x) => setJasaData(x.data)}>
												{jasaData && <><Select name="retail_jasa" label="Mode Pengiriman" options={
													rrrrrr(jasaData.map(obj => [obj.retail_id, obj.retail_jasa]))
												} value={jasa} onChange={e => setJasa(e.target.value)} />
													{jasa && <RealOrder id={jasa} ok={ok} setOk={setOK} />}
												</>}
											</Page>)}
								</>}
							</Page>}
						</>}
					</Page>}
				</>}
			</Page>}
			{login() && <Submit label="Order" disabled={!ok} />}
		</Form>
		{ok && (!login() && <Login callback={() => setOK(ok)}/>)}
	</Page>)
}