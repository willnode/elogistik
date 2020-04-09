import React, { useState } from 'react';
import Header from './header';
import Drawer from './drawer';
import Footer from './footer';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';
import { Context } from '../main/Contexts';

function Notification() {
	Context.bind('message', useState(null));
	Context.bind('error', useState(null));
	return <>
			{(x => x ? <Alert severity="success" color="info">{x}</Alert> : null)(Context.get('message'))}
			{(x => x ? <Alert severity="error">{x}</Alert> : null)(Context.get('error'))}
		</>
}

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<Box display="flex">
				<Drawer />
				<Box p={2} flexGrow={1} component="main">
					<Notification />
					{children}
				</Box>
			</Box>
			<Footer />
		</>
	)
}