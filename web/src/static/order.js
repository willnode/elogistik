import { SEO } from 'widget/page';
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
	const [qty, setQty] = React.useState(1);
	const berat = useMemo(() => {
		let patokan = (data && data.retail_jalur === 'Udara') ? 6000 : 4000;
		let volume = p * l * t;
		return Math.max(kg, Math.ceil(volume / patokan));
	}, [data, kg, p, l, t])
	const harga = useMemo(() => {
		return data ? (Math.max(parseInt(data.retail_minkg) / qty, berat) * parseInt(data.retail_perkg) * qty) : 0;
	}, [data, qty, berat]);
	useEffect(() => {
    const limit = data ? data.retail_minkg : 100;
		if (ok !== Boolean(berat * qty >= limit)) {
			setOk(Boolean(berat * qty >= limit));
		}
	}, [ok, berat, setOk, qty, data])
	return <Page src={`check_retail/${id}`} dataCallback={(x) => setData(x.data)}>
		{data && <div>
			<input type="hidden" readOnly name="order_retail" value={id} />
			<Input name="order_kg" type="number"
					inputProps={{ min: 0 }} label="Berat (KG)" value={kg} onChange={(e) => setKg(e.target.value)} />
			<Grid container spacing={3}>
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
			<Input name="order_qty" type="number" inputProps={{ min: 1 }} label="Jumlah Barang" value={qty} onChange={(e) => setQty(e.target.value)} />
			<FlexGroup label="Total Harga" marginY={2}>
				{formatRupiah(harga)}
			</FlexGroup>

			{!ok && <Alert style={{ margin: '1rem 0' }} severity="info">{'Hitungan KG saat ini '+(berat*qty)+'  KG akan disetarakan menjadi '+data.retail_minkg+' KG'}</Alert>}
			<Alert style={{ margin: '1rem 0' }} severity={login() ? "info" : "warning"}>{login() ? 'Data order anda akan dimasukkan ke akun anda' : 'Anda perlu masuk untuk melanjutkan'}</Alert>
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
	const [pulau, setPulau] = React.useState('');
	const [pulauData, setPulauData] = React.useState();
	const [prov, setProv] = React.useState('');
	const [provData, setProvData] = React.useState();
	const [kab, setKab] = React.useState('');
	const [kabData, setKabData] = React.useState();
	const [jasa, setJasa] = React.useState('');
	const [jasaData, setJasaData] = React.useState();
	const [ok, setOK] = React.useState(null);
	return (<Page className="paper" maxWidth="sm">
		<SEO
      title="Welcome to Best Logistic Surabaya!"
      description="Best Logistics Surabaya adalah perusahaan yang bergerak dibidang jasa pengiriman barang / cargo atau ekspedisi yang didukung oleh tenaga kerja / SDM yang profesional dan cakap serta memiliki armada yang sehat dengan perawatan rutin."
      image="/assets/beranda/36.jpeg"
    /><h1>Order</h1>
		<Form action="user/order" redirect={(json) => history().push('/user/order/detail/' + json.id)}>
			<Input name="order_nama" label="Nama Barang (Wajib)" value={nama} onChange={(e) => setNama(e.target.value)} />
			<Select label="Pengiriman Asal" options={{
				sby: "Surabaya",
			}} defaultValue="sby" />
			{nama && <Page src="check_retail?groupBy=retail_jalur" dataCallback={(x) => setJalurData(x.data)}>
				{jalurData && <>
					<FlexGroup label="Pengiriman Tujuan" marginTop={3} marginBottom={1} />
					<Select name="retail_jalur" label="Jalur" options={
						rrrrrr(jalurData.map(obj => [obj.retail_jalur, obj.retail_jalur]))
					} value={jalur} onChange={e => [setJalur(e.target.value), setPulau('')]} />
					{jalur && <Page key={jalur} src={`check_retail?groupBy=retail_pulau&retail_jalur=${jalur}`} dataCallback={(x) => setPulauData(x.data)}>
						{pulauData && <><Select name="retail_pulau" label="Pulau" options={
							rrrrrr(pulauData.map(obj => [obj.retail_pulau, obj.retail_pulau]))
						} value={pulau} onChange={e => [setPulau(e.target.value), setProv('')]} />
							{pulau && <Page key={pulau} src={`check_retail?groupBy=retail_prov&retail_jalur=${jalur}&retail_pulau=${pulau}`} dataCallback={(x) => setProvData(x.data)}>
								{provData && <><Select name="retail_prov" label="Provinsi" options={
									rrrrrr(provData.map(obj => [obj.retail_prov, obj.retail_prov]))
								} value={prov} onChange={e => [setProv(e.target.value), setKab('')]} />
									{prov && <Page key={prov} src={`check_retail?groupBy=retail_kab&retail_jalur=${jalur}&retail_pulau=${pulau}&retail_prov=${prov}`}
										dataCallback={(x) => setKabData(x.data)}>
										{kabData && <><Select name="retail_kab" label={jalur === 'Udara' ? 'Bandara' : 'Kota'} options={
											rrrrrr(kabData.map(obj => [jalur !== 'Udara' ? obj.retail_id : obj.retail_kab, obj.retail_kab]))
										} value={kab} onChange={e => [setKab(e.target.value), setJasa('')]} />
											{kab && (
												jalur !== 'Udara' ? <RealOrder key={kab} id={kab} ok={ok} setOk={setOK} /> :
													<Page key={kab} src={`check_retail?groupBy=retail_jasa&retail_jalur=${jalur}&retail_pulau=${pulau}&retail_prov=${prov}&retail_kab=${kab}`}
														dataCallback={(x) => setJasaData(x.data)}>
														{jasaData && <><Select name="retail_jasa" label="Mode Pengiriman" options={
															rrrrrr(jasaData.map(obj => [obj.retail_id, obj.retail_jasa]))
														} value={jasa} onChange={e => setJasa(e.target.value)} />
															{jasa && <RealOrder key={jasa} id={jasa} ok={ok} setOk={setOK} />}
														</>}
													</Page>)}
										</>}
									</Page>}
								</>}
							</Page>}
						</>}
					</Page>}
				</>}
			</Page>}
			{login() && <Submit label="Order" />}
		</Form>
		{ok !== null && (!login() && <Login callback={() => setOK(ok)} />)}
	</Page>)
}