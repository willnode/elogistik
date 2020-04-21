import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Footer() {
	return (<Box mt={8} p={5} style={{ backgroundColor: '#ac1900', textAlign: 'center' }}>
		<Typography variant="body2" component="div" color="textSecondary" align="center">
			<h3>Best Logistic</h3>
			<p>Ruko Korem 084 Bhaskara Jaya Jl.Wisata Menanggal No.57 Surabaya</p>
		</Typography>
	</Box>)
}