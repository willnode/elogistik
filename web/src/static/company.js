import React from 'react';
import Page, { SEO } from '../widget/page';
import Slider from "react-slick";
import { publicUrl } from '../main/Config';

export default function Company() {

	return (<Page className="paper center" maxWidth="md">
		<SEO
      title="Company Profile Best Logistic Surabaya!"
      description="Company profile kami dapat memberikan anda informasi tentang Best Logistic Surabaya, mulai dari didirikannya Best Logistic Surabaya, legalitas, dan beberapa dokumentasi tentang apa yang kami lakukan."
      image="/assets/beranda/36.jpg"
    />
		<h1>Company Profile</h1>
		<p>Company profile kami dapat memberikan anda informasi tentang Best Logistic Surabaya,
			mulai dari didirikannya Best Logistic Surabaya, legalitas, dan beberapa dokumentasi
			tentang apa yang kami lakukan </p>
		<div className="gallery-slider company">
			<Slider infinite autoplay>
				{
					[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((x) =>
						<img src={`${publicUrl}/assets/company/${x}.png`} alt="" key={x}/>
					)
				}
			</Slider>
		</div>
	</Page>)
}