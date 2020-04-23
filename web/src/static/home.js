import React from 'react';
import Page, { SEO } from '../widget/page';
import { Link } from 'react-router-dom';
import { Context } from '../main/Contexts';

export default function Home() {
	return (<Page className="paper justify">
		<SEO
			title="Welcome to Best Logistic Surabaya!"
			description="Best Logistics Surabaya adalah perusahaan yang bergerak dibidang jasa pengiriman barang / cargo atau ekspedisi yang didukung oleh tenaga kerja / SDM yang profesional dan cakap serta memiliki armada yang sehat dengan perawatan rutin."
			image="/assets/gallery/1.jpg"
		/>
		<h1>Welcome to Best Logistic Surabaya!</h1>

		<p>Best Logistics Surabaya adalah perusahaan yang bergerak dibidang jasa pengiriman barang / cargo atau ekspedisi yang didukung oleh tenaga kerja / SDM yang profesional dan cakap serta memiliki armada yang sehat dengan perawatan rutin. Driver kami mengedepankan keselamatan kerja dan mengikuti regulasi angkutan darat dan management resiko. Team kami mengedepankan pelayanan yang profesional, anda juga dapat melihat hasil kerja kami di <Link to="/galeri">gallery</Link> minat menggunakan dengan jasa kami ? silahkan klik <Link to="/order">order</Link> atau jika anda ingin bertanya-tanya, silahkan hubungi salah satu <a href="#/" onClick={() => Context.set('balloon', true)}>admin</a> kami</p>
	</Page>)
}