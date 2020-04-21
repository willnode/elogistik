import React, { useState } from 'react';
import Header from './header';
import Drawer from './drawer';
import Footer from './footer';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import Balloon from './balloon';
import { Context } from '../main/Contexts';
import Slider from "react-slick";
import { publicUrl } from '../main/Config';

function Notification() {
	Context.bind('message', useState(null));
	Context.bind('error', useState(null));
	return <>
		{(x => x ? <Alert severity="success" color="info">{x}</Alert> : null)(Context.get('message'))}
		{(x => x ? <Alert severity="error">{x}</Alert> : null)(Context.get('error'))}
	</>
}

const Gallery = React.memo(function() {
	return <><div className="gallery-slider header">
		<Slider infinite autoplay arrows={false} pauseOnHover={false}>
			{
				[1, 2, 3, 4, 5, 6, 7, 8].map((x) =>
					<img src={`${publicUrl}/assets/gallery/${x}.jpg`} alt="" key={x} />
				)
			}
		</Slider>
	</div>
	<div className="marquee"><p><span>Best Logistic</span> - Best Team Best Partner Best Logistic</p></div>
	</>
})


export default function Layout({ children }) {
	return (
		<>
			<Header />
			<Gallery />
			<Box display="flex">
				<Drawer />
				<Box p={2} flexGrow={1} component="main">
					<Notification />
					{children}
				</Box>
			</Box>
			<Footer />
			<Balloon />
		</>
	)
}