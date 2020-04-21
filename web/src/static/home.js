import React from 'react';
import Page from '../widget/page';
import { Link } from 'react-router-dom';
import { Context } from '../main/Contexts';
import Slider from "react-slick";
import { publicUrl } from '../main/Config';

export default function Home() {

	return (<Page textAlign="justify" maxWidth="md">

		<h1>Welcome to Best Logistic Surabaya!</h1>
		<div className="gallery-slider">
			<Slider infinite>
				{
					[2, 1, 2, 1, 1, 2, 1, 2].map((x, i) =>
						<img src={`${publicUrl}/assets/gallery/${i + 1}.jpg`} alt="" key={i} />
					)
				}
			</Slider>
		</div>

		<p>Best Logistics Surabaya kami adalah perusahaan yang bergerak dibidang ekspedisi logistic atau jasa pengiriman barang dengan kualitas tenaga kerja serta armada yang professional dengan mengedepankan kualitas, kepuasan dan pelayanan yang optimal kepada pelanggan, anda dapat melihat hasil kerja kami di <Link to="/galeri">gallery</Link> minat menggunakan dengan jasa kami ? silahkan klik <Link to="/order">order</Link> atau jika anda ingin bertanya-tanya, silahkan hubungi salah satu <a href="#/" onClick={() => Context.set('balloon', true)}>admin</a> kami</p>
	</Page>)
}