import React from 'react';
import Page from '../widget/page';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
	  <Typography
		component="div"
		role="tabpanel"
		hidden={value !== index}
		id={`simple-tabpanel-${index}`}
		{...other}
	  >
		{value === index && <Box p={3}>{children}</Box>}
	  </Typography>
	);
  }

export default function Layanan() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (<Page>
		<h1>Layanan Best Logistics</h1>
		<AppBar position="static">
			<Tabs value={value} onChange={handleChange}>
				<Tab label="Logistik Darat" />
				<Tab label="Logistik Laut" />
				<Tab label="Logistik Udara" />
			</Tabs>
		</AppBar>
		<TabPanel value={value} index={0}>
			Logistik Darat
		</TabPanel>
		<TabPanel value={value} index={1}>
			Logistik Laut
		</TabPanel>
		<TabPanel value={value} index={2}>
			Logistik Udara
		</TabPanel>
	</Page>)
}