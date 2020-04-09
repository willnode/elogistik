import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { RoleSidebars } from '../main/App';
import { useStyles } from '../main/Helper';
import { Context } from '../main/Contexts';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

const DrawerListItem = ({ to, icon, label }) => (
	<ListItem component={Link} button to={to}>
		<ListItemIcon>{React.createElement(icon)}</ListItemIcon>
		<ListItemText primary={label} />
	</ListItem>
)

function DrawerComponent({ children }) {
	let classes = useStyles();
	Context.bind('drawerOpen', useState(false));
	useEffect(() => (() => Context.unbind('drawerOpen')), [])
	return (
		<nav>
			<Hidden smUp implementation="css">
				<Drawer
					variant="temporary"
					classes={{
						paper: classes.drawerPaper,
					}}
					open={Context.get('drawerOpen')}
					onClose={() => Context.set('drawerOpen', false)}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
				>
					<div className={classes.drawerContainer}>
						{children}
					</div>
				</Drawer>
			</Hidden>
			<Hidden xsDown implementation="css">
				<Box py={2} my={8} marginLeft={2} clone>
					<Paper className={classes.content}>
						<div className={classes.drawerContainer}>
							{children}
						</div>
					</Paper>
				</Box>
			</Hidden>
		</nav>
	)
}
export default function () {
	return <RoleSidebars>
		<DrawerComponent>
			<List>
				<ListItem>
					<ListItemText primary="Best Logistic" />
				</ListItem>
				<ListItem component="a" button href="https://facebook.com" target="_blank" rel="noopener noreferrer">
					<ListItemIcon><FacebookIcon /></ListItemIcon>
					<ListItemText primary="Facebook" />
				</ListItem>
				<ListItem component="a" button href="https://instagram.com" target="_blank" rel="noopener noreferrer">
					<ListItemIcon><InstagramIcon /></ListItemIcon>
					<ListItemText primary="Instagram" />
				</ListItem>
				<ListItem component="a" button href="https://youtu.be" target="_blank" rel="noopener noreferrer">
					<ListItemIcon><YouTubeIcon /></ListItemIcon>
					<ListItemText primary="YouTube" />
				</ListItem>
			</List>
		</DrawerComponent>
	</RoleSidebars>
}

export {
	DrawerComponent, DrawerListItem
}