import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function Topbar({component}) {
	component = component || Link;
	return <>
		<Button component={component} to="/">Beranda</Button>
		<Button component={component} to="/order">Order</Button>
		<Button component={component} to="/layanan">Layanan</Button>
		<Button component={component} to="/galeri">Gallery</Button>
		<Button component={component} to="/about">About Us</Button>
	</>
}