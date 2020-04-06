import React from 'react';
import Page from '../widget/page';
import { Input, Form, Select, Submit } from '../widget/controls';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import session from '../main/Session';

export default function Order() {
	const [harga, setHarga] = React.useState();
	return (<Page>
		<h1>Order</h1>
		<Form onSubmit={(e) => {
			const data = Object.fromEntries(session.extract(e));
			let patokan = data.barang_jalur === 'udara' ? 6000 : 4000;
			let volume = data.barang_dimensi_p * data.barang_dimensi_l * data.barang_dimensi_t;
			let harga = (volume / patokan) * 5000 * data.barang_jumlah;
			setHarga(harga);
		}}>
			<Input name="barang_nama" label="Nama Barang" required/>
			<Select name="barang_jalur" label="Jalur" options={{
				darat: 'Darat',
				laut: 'Laut',
				udara: 'Udara',
			}} required/>
			<Box paddingLeft={10} paddingTop={1}>
				<Typography>Dimensi Barang</Typography>
				<Input name="barang_dimensi_p" label="Panjang (CM)" type="number" required/>
				<Input name="barang_dimensi_l" label="Lebar (CM)" type="number" required/>
				<Input name="barang_dimensi_t" label="Tinggi (CM)" type="number" required/>
			</Box>
			<Input name="barang_jumlah" label="Jumlah Barang (Item)" type="number" required/>
			<Input name="barang_asal" label="Asal" required/>
			<Input name="barang_tujuan" label="Tujuan" required/>
			<Submit label="Hitung"/>
		</Form>
		<Box marginY={2}>
		<Typography variant="h5">Total Harga: {harga ? session.formatRupiah(harga) : '-'}</Typography>

		</Box>
	</Page>)
}