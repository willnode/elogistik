import React from 'react';
import Page from '../widget/page';
import Grid from '@material-ui/core/Grid';
import { publicUrl } from '../main/Config';
import { Link } from 'react-router-dom';
import { Context } from 'main/Contexts';


export default function About() {
	const Img = ({src}) => {
		return <img alt="" style={{width: '100%'}} src={publicUrl + `/assets/about/${src}.png`} />
	}
	return (<Page className="paper center" maxWidth="md">
		<h1>Tentang Best Logistic</h1>

		<p>Kami adalah Best Logistics Surabaya, perusahaan yang bergerak dibidang jasa pengiriman barang / cargo atau ekspedisi </p>
		<h2>Crew</h2>
		<Grid container justify="center" spacing={2}>
			<Grid item md={6} lg={4} xl={2}><Img src={1} /></Grid>
			<Grid item md={6} lg={4} xl={2}><Img src={2} /></Grid>
			<Grid item md={6} lg={4} xl={2}><Img src={3} /></Grid>
			<Grid item md={6} lg={4} xl={2}><Img src={4} /></Grid>
			<Grid item md={6} lg={4} xl={2}><Img src={5} /></Grid>
		</Grid>
		<p>anda dapat melihat hasil kerja kami di <Link to="/galeri">gallery</Link>minat menggunakan dengan jasa kami ? silahkan klik <Link to="/order">order</Link>atau jika anda ingin bertanya-tanya, silahkan hubungi salah satu <a href="#/" onClick={() => Context.set('balloon', true)}>admin</a> kami</p>
	</Page>)
}