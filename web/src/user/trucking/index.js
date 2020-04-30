import Detail from './detail';
import List from './list';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

export default ({ match }) => (
	<Switch>
		<Route exact path={match.url+'/'} component={List}/>
		<Route exact path={match.url+'/create'}>
			<Redirect to="/trucking/" />
		</Route>
		<Route exact path={match.url+'/detail/:id'} component={Detail} />
	</Switch>
)