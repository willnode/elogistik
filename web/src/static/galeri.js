import { SEO } from 'widget/page';
import React from 'react';
import Page from '../widget/page';
import { publicUrl } from '../main/Config';
import Slider from "react-slick";

export default function Galeri() {
	
	return (<Page className="paper center">
		<SEO
      title="Gallery Best Logistic Surabaya"
      description="Anda dapat melihat hasil dokumentasi dari Best Logistic Surabaya, mulai dari Kegiatan hingga apa saja yang telah kami kerjakan."
      image="/assets/beranda/36.jpg"
    /><h1>Galeri Best Logistics</h1>
		<div className="gallery-slider gallery"><Slider infinite autoplay dots={true}>
			{
				[
					1, 2, 3, 4, 5, 6, 7, 8
				].map((x, i) =>
					<img key={i} src={`${publicUrl}/assets/gallery/${i + 1}.jpg`} alt="" />
				)
			}
		</Slider></div>
		<h2>Galeri Kegiatan Best Logistics</h2>
		<div className="gallery-slider gallery"><Slider infinite autoplay dots={true}>
			{
				[
					1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
					11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
					21, 22, 23,
				].map((i) =>

					<img key={i} src={`${publicUrl}/assets/kegiatan/${i + 1}.jpeg`} alt="" />

				)
			}
		</Slider></div>
		<h2>Galeri Armada Best Logistics</h2>
		<div className="gallery-slider gallery"><Slider infinite autoplay dots={true}>
			{
				[
					1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
					11, 12, 13, 14
				].map((i) =>

					<img key={i} src={`${publicUrl}/assets/armada/${i + 1}.jpeg`} alt="" />

				)
			}
		</Slider></div>
		<h2>Galeri Cargo Darat Best Logistics</h2>
		<div className="gallery-slider gallery"><Slider infinite autoplay dots={true}>
			{
				[1, 2, 3, 4, 5, 6, 7, 8].map((i) =>

					<img key={i} src={`${publicUrl}/assets/cargo/${i + 1}.jpeg`} alt="" />

				)
			}
		</Slider></div>
		<h2>Galeri Cargo Laut Best Logistics</h2>
		<div className="gallery-slider gallery"><Slider infinite autoplay dots={true}>
			{
				[1, 2, 3, 4, 5].map((i) =>

					<img key={i} src={`${publicUrl}/assets/laut/${i + 1}.jpeg`} alt="" />

				)
			}
		</Slider></div>
		<h2>Galeri Cargo Udara Best Logistics</h2>
		<div className="gallery-slider gallery"><Slider infinite autoplay dots={true}>
			{
				[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>

					<img key={i} src={`${publicUrl}/assets/udara/${i + 1}.jpeg`} alt="" />

				)
			}
		</Slider></div>
	</Page>)
}