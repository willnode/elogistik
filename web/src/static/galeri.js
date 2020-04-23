import React from 'react';
import Page from '../widget/page';
import { publicUrl } from '../main/Config';
import Slider from "react-slick";

export default function Galeri() {

	return (<Page className="paper center">
		<h1>Galeri Best Logistics</h1>
		<div className="gallery-slider gallery"><Slider infinite autoplay dots={true}>
			{
				[2, 1, 2, 1, 1, 2, 1, 2].map((x, i) =>
					<img key={i} src={`${publicUrl}/assets/gallery/${i + 1}.jpg`} alt="" />
				)
			}
		</Slider></div>
		<h2>Galeri Kegiatan Best Logistics</h2>
		<div className="gallery-slider gallery"><Slider infinite autoplay dots={true}>
			{
				[
					1, 2, 3, 3, 1, 1, 1, 1, 1, 1,
					1, 2, 1, 2, 1, 1, 1, 1, 2, 1,
					1, 1, 1, 2, 3
				].map((x, i) =>

					<img key={i} src={`${publicUrl}/assets/kegiatan/${i + 1}.jpeg`} alt="" />

				)
			}
		</Slider></div>
		<h2>Galeri Armada Best Logistics</h2>
		<div className="gallery-slider gallery"><Slider infinite autoplay dots={true}>
			{
				[1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1].map((x, i) =>

					<img key={i} src={`${publicUrl}/assets/armada/${i + 1}.jpeg`} alt="" />

				)
			}
		</Slider></div>
		<h2>Galeri Cargo Best Logistics</h2>
		<div className="gallery-slider gallery"><Slider infinite autoplay dots={true}>
			{
				[2, 1, 2, 1, 1, 2, 1, 2].map((x, i) =>

					<img key={i} src={`${publicUrl}/assets/cargo/${i + 1}.jpeg`} alt="" />

				)
			}
		</Slider></div>
		<h2>Galeri Udara Best Logistics</h2>
		<div className="gallery-slider gallery"><Slider infinite autoplay dots={true}>
			{
				[1, 2, 1, 1, 1, 2, 1, 2, 1].map((x, i) =>

					<img key={i} src={`${publicUrl}/assets/udara/${i + 1}.jpeg`} alt="" />

				)
			}
		</Slider></div>
	</Page>)
}