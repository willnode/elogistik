import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Page from './page';

export default function Footer() {
	return (<Box mt={8} p={5} style={{ backgroundColor: '#020202', textAlign: 'center' }}>
		<Grid container spacing={3}>
			<Grid item xs={12} sm={6}>
				<Page>
					<h3>Contact Us</h3>
				</Page>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Page>
					<h3>Company</h3>
				</Page>
			</Grid>
		</Grid>
		<Typography variant="body2" color="textSecondary" align="center">
			<h3>Best Logistic</h3>
			<p>Surabaya</p>
		</Typography>
	</Box>)
}