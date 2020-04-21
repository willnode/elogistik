import React from 'react';
import { DrawerComponent, DrawerListItem } from '../widget/drawer';
import List from '@material-ui/core/List';
import Dashboard from '@material-ui/icons/Dashboard';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import People from '@material-ui/icons/People';
import LocalShipping from '@material-ui/icons/LocalShipping';


export default function () {
	return (
		<DrawerComponent>
			<List>
				<DrawerListItem  to="/admin/" icon={Dashboard} label="Dashboard"/>
				<DrawerListItem  to="/admin/profile" icon={People} label="Profile"/>
				<DrawerListItem  to="/admin/user" icon={SupervisedUserCircle} label="Users"/>
				<DrawerListItem  to="/admin/order" icon={LocalShipping} label="Order"/>
			</List>
		</DrawerComponent>
	)
}