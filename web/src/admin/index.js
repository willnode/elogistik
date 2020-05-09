import React from 'react';
import List from '@material-ui/core/List';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Trucking from './trucking';
import Order from './order';
import Profile from 'widget/shared/profile';
import User from './user';
import Page404 from 'static/404';
import { CheckRole } from 'widget/controls';
import { SEO } from 'widget/page';
import { LoginMenu } from 'widget/header';
import { DrawerComponent, DrawerListItem } from 'widget/drawer';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PeopleIcon from '@material-ui/icons/People';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';

function Main() {
  return (
    <CheckRole role='admin'>
      <SEO title="Panel Admin" />
      <Switch>
        <Route exact path="/admin" component={Dashboard} />
        <Route path="/admin/profile" component={Profile} />
        <Route path="/admin/order" component={Order} />
        <Route path="/admin/user" component={User} />
				<Route path="/admin/trucking" component={Trucking} />
        <Route component={Page404} />
      </Switch>
    </CheckRole>
  )
}

function LeftBar() {
  return (
    <DrawerComponent>
      <List>
        <DrawerListItem to="/admin/" icon={DashboardIcon} label="Dashboard" />
        <DrawerListItem to="/admin/profile/" icon={PeopleIcon} label="Profil" />
        <DrawerListItem to="/admin/user/" icon={SupervisedUserCircleIcon} label="Users" />
        <DrawerListItem to="/admin/order/" icon={LocalShippingIcon} label="Order" />
				<DrawerListItem to="/admin/trucking/" icon={LocalShippingOutlinedIcon} label="Sewa Truk"/>
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
  role: 'admin',
  main: Main,
  top: TopBar,
  left: LeftBar,
}