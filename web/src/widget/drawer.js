import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { RoleSidebars, RoleTopbars } from '../main/App';
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
import { isProduction } from '../main/Config';

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
		<nav className="sidebar">
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
			<Hidden smUp implementation="css">
				<List>
					<ListItem>
						<ListItemText primary="Menu" />
					</ListItem>
					<RoleTopbars component={React.forwardRef(
						(props, ref) => <ListItem children={<Link {...props} ref={ref} />}/>
					)} />
				</List>
			</Hidden>
			<List>
				<ListItem>
					<ListItemText primary="Follow Us" />
				</ListItem>
				<ListItem>
					<Grid container>
						<Grid item sm={4}>
							<IconButton href="https://facebook.com"
								target="_blank" rel="noopener noreferrer">
								<FacebookIcon style={{ color: '#1877F2' }} />
							</IconButton>
						</Grid>
						<Grid item sm={4}>
							<IconButton href="https://instagram.com"
								target="_blank" rel="noopener noreferrer">
								<InstagramIcon style={{ color: '#E4405F' }} />
							</IconButton>
						</Grid>
						<Grid item sm={4}>
							<IconButton href="https://youtu.be"
								target="_blank" rel="noopener noreferrer">
								<YouTubeIcon style={{ color: '#FF0000' }} />
							</IconButton>
						</Grid>
					</Grid>
				</ListItem>
			</List>
			{isProduction && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1176.442620715147!2d112.7321577531674!3d-7.346538647374439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e5c8a23f4e13%3A0x7f32129b25bad9b2!2sBEST%20LOGISTIC%20SURABAYA!5e0!3m2!1sid!2sid!4v1586505310484!5m2!1sid!2sid"
				title="Maps" width="100%" height="250" frameBorder="0" style={{ border: 0 }} allowFullScreen tabIndex="0"></iframe>}
		</DrawerComponent>
	</RoleSidebars>
}

export {
	DrawerComponent, DrawerListItem
}