import React from 'react';
import Page from '../widget/page';
import { Input, Form, Select, Submit, CommandButtonGroup } from '../widget/controls';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { formatRupiah } from '../main/Helper';
import { useMemo } from 'react';

function RealOrder({ id }) {
	const [data, setData] = React.useState();
	const [mode, setMode] = React.useState('');
	const [kg, setKg] = React.useState(0);
	const [p, setP] = React.useState(0);
	const [l, setL] = React.useState(0);
	const [t, setT] = React.useState(0);
	const [qty, setQty] = React.useState(1);
	const berat = useMemo(() => {
		if (mode === 'volume') {
			let patokan = (mode === 'Udara') ? 6000 : 4000;
			return Math.ceil(p * l * t / patokan);
		} else {
			return kg;
		}
	}, [mode, kg, p, l, t])
	const harga = useMemo(() => {
		return data && (berat * parseInt(data.retail_perkg) * qty) + parseInt(data.retail_kubikasi);
	}, [data, qty, berat]);
	return <Page src={`check_retail/${id}`} dataCallback={(x) => setData(x.data)}>
		{data && <Form>
			<Select name="mode" label="Mode Penghitungan" options={{
				berat: "Berat",
				volume: "Volume",
			}} value={mode} onChange={(e) => setMode(e.target.value)} />
			{mode === 'berat' && <Box>
				<Input name="kg" type="number" inputProps={{ min: 0 }} label="Berat (KG)" value={kg} onChange={(e) => setKg(e.target.value)} />
			</Box>}
			{mode === 'volume' && <Box>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={4}>
						<Input name="p" type="number" inputProps={{ min: 0 }} label="Panjang (CM)" value={p} onChange={(e) => setP(e.target.value)} />
					</Grid>
					<Grid item xs={12} sm={4}>
						<Input name="l" type="number" inputProps={{ min: 0 }} label="Lebar (CM)" value={l} onChange={(e) => setL(e.target.value)} />
					</Grid>
					<Grid item xs={12} sm={4}>
						<Input name="t" type="number" inputProps={{ min: 0 }} label="Tinggi (CM)" value={t} onChange={(e) => setT(e.target.value)} />
					</Grid>
				</Grid>
				<CommandButtonGroup label="Estimasi Berat" marginY={2}>
					{berat} KG
				</CommandButtonGroup>
			</Box>}
			<Input name="item" type="number" inputProps={{ min: 1 }} label="Jumlah Barang" value={qty} onChange={(e) => setQty(e.target.value)} />
			<CommandButtonGroup label="Total Harga" marginY={2}>
				{formatRupiah(harga)}
			</CommandButtonGroup>
			<CommandButtonGroup marginY={2}>
				<small>Harga belum termasuk packing dan asuransi</small>
			</CommandButtonGroup>
			<Submit disabled={!harga} />
		</Form>}
	</Page>
}

const rrrrrr = (arr) => arr.reduce(function (map, [key, val]) {
	map[key] = val;
	return map;
}, {})

export default function Order() {
	const [jalur, setJalur] = React.useState('');
	const [jalurData, setJalurData] = React.useState();
	const [prov, setProv] = React.useState('');
	const [provData, setProvData] = React.useState();
	const [kab, setKab] = React.useState('');
	const [kabData, setKabData] = React.useState();
	return (<Page maxWidth="sm" style={{ minHeight: '600px' }}>
		<h1>Order</h1>
		<Select label="Pengiriman Asal" options={{
			sby: "Surabaya",
		}} defaultValue="sby" />
		<Page src="check_retail?groupBy=retail_jalur" dataCallback={(x) => setJalurData(x.data)}>
			{jalurData && <>
				<CommandButtonGroup label="Pengiriman Tujuan" marginTop={3} marginBottom={1} />
				<Select name="retail_jalur" label="Jalur" options={
					rrrrrr(jalurData.map(obj => [obj.retail_jalur, obj.retail_jalur]))
				} value={jalur} onChange={e => setJalur(e.target.value)} />
				{jalur && <Page src={`check_retail?groupBy=retail_prov`} dataCallback={(x) => setProvData(x.data)}>
					{provData && <><Select name="retail_prov" label="Provinsi" options={
						rrrrrr(provData.map(obj => [obj.retail_prov, obj.retail_prov]))
					} value={prov} onChange={e => setProv(e.target.value)} />
						{prov && <Page src={`check_retail?groupBy=retail_kab&retail_prov=${prov}`}
							dataCallback={(x) => setKabData(x.data)}>
							{kabData && <><Select name="retail_kab" label="Kabupaten" options={
								rrrrrr(kabData.map(obj => [obj.retail_id, obj.retail_kab]))
							} value={kab} onChange={e => setKab(e.target.value)} />
								{kab && <RealOrder id={kab} />}
							</>}
						</Page>}
					</>}
				</Page>}
			</>}
		</Page>
	</Page>)
}