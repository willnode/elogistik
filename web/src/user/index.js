import React from 'react';
import List from '@material-ui/core/List';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Switch, Route } from 'react-router-dom';
import Order from './order';
import Trucking from './trucking';
import Dashboard from './dashboard';
import Profile from 'widget/shared/profile';
import Page404 from 'static/404';
import { CheckRole } from 'widget/controls';
import { SEO } from 'widget/page';
import { LoginMenu } from 'widget/header';
import { DrawerComponent, DrawerListItem } from 'widget/drawer';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import PeopleIcon from '@material-ui/icons/People';

function Main () {
	return (
		<CheckRole role='user'>
			<SEO title="Panel User"/>
			<Switch>
				<Route exact path="/user" component={Dashboard} />
				<Route path="/user/profile" component={Profile} />
				<Route path="/user/order" component={Order} />
				<Route path="/user/trucking" component={Trucking} />
				<Route component={Page404} />
			</Switch>
		</CheckRole>
	)
}

function LeftBar() {
	return (
		<DrawerComponent>
			<List>
				<DrawerListItem to="/user/" icon={DashboardIcon} label="Dashboard"/>
				<DrawerListItem to="/user/profile/" icon={PeopleIcon} label="Profil"/>
				<DrawerListItem to="/user/order/" icon={LocalShippingIcon} label="Order Barang"/>
				<DrawerListItem to="/user/trucking/" icon={LocalShippingOutlinedIcon} label="Sewa Truk"/>
			</List>
		</DrawerComponent>
	)
}

function TopBar() {
	return (
		<LoginMenu />
	);
}

export default {
	role: 'user',
	main: Main,
	top: TopBar,
	left: LeftBar,
}