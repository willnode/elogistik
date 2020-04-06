import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { RoleSidebars } from '../main/App';
import { useStyles } from '../main/Helper';
import session from '../main/Session';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'


const DrawerListItem = ({ to, icon, label }) => (
	<ListItem component={Link} button to={to}>
		<ListItemIcon>{React.createElement(icon)}</ListItemIcon>
		<ListItemText primary={label} />
	</ListItem>
)

function DrawerComponent({ children }) {
	let classes = useStyles();
	return (
		<nav>
			<Hidden smUp implementation="css">
				<Drawer
					variant="temporary"
					classes={{
						paper: classes.drawerPaper,
					}}
					open={session.drawerOpen}
					onClose={session.toggleDrawerOpen}
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
				<Drawer
					classes={{
						paper: classes.drawerPaper,
					}}
					className={classes.drawer}
					variant="permanent"
					open
				>
					<Toolbar />
					<div className={classes.drawerContainer}>
						{children}
					</div>
				</Drawer>
			</Hidden>
		</nav>)
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