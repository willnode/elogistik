import React from 'react';
import Home from './home';
import { LoginWithSEO } from './login';
import Offline from './offline';
import Page404 from './404';
import { Switch, Route, Redirect } from "react-router-dom";
import { login } from '../main/Helper';
import Order from './order';
import Layanan from './layanan';
import Galeri from './galeri';
import About from './about';
import Topbar from './topbar';
import Company from './company';

function RedirectIfLoggedInOrShow({ component }) {
	return login() ? <Redirect to={'/' + login().role + '/'} /> : React.createElement(component);
}

export default function Static() {
	return <Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/offline" component={Offline} />
		<Route path="/layanan" component={Layanan} />
		<Route exact path="/order" component={Order} />
		<Route exact path="/galeri" component={Galeri} />
		<Route exact path="/about" component={About} />
		<Route exact path="/company" component={Company} />
		<Route exact path="/login">
			<RedirectIfLoggedInOrShow component={LoginWithSEO} />
		</Route>
		<Route component={Page404} />
	</Switch>
}

export {
	Topbar
}