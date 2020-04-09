import React from 'react';
import Dashboard from './dashboard';
import Profile from './profile';
import User from './user';
import Page404 from '../static/404';
import Sidebar from './sidebar';
import Topbar from './topbar';
import { Switch, Route } from 'react-router-dom';
import { CheckRole } from '../widget/controls';
import { SEO } from '../widget/page';

export default function () {
	return (
		<CheckRole role='admin'>
			<SEO title="Panel Admin"/>
			<Switch>
				<Route exact path="/admin" component={Dashboard} />
				<Route path="/admin/profile" component={Profile} />
				<Route path="/admin/user" component={User} />
				<Route component={Page404} />
			</Switch>
		</CheckRole>
	)
}

export { Sidebar, Topbar }