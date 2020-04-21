import React from 'react';
import Page, { SEO } from '../widget/page';
import Slider from "react-slick";
import { publicUrl } from '../main/Config';

export default function Company() {
	return (<Page textAlign="center" maxWidth="md">
		<SEO title="Company Profile" />
		<h1>Company Profile</h1>
		<div className="gallery-slider company">
			<Slider infinite>
				{
					[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((x) =>
						<img src={`${publicUrl}/assets/company/${x}.jpg`} alt="" key={x}/>
					)
				}
			</Slider>
		</div>
	</Page>)
}