import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import $ from 'jquery';

injectTapEventPlugin();

const store = configureStore();

import App from './containers/App';

const rootRoute = {
	component:   'div',
	childRoutes: [
		{
			path:        '/',
			component:   App,
			childRoutes: [
				require('./routes/Admin')
			]
		}
	]
};

$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': window.csrf_token
	}
});

const RootElement = document.getElementById('root');

if (!!RootElement) {
	render(
		<Provider store={store}>
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<Router history={browserHistory} routes={rootRoute}/>
			</MuiThemeProvider>
		</Provider>,
		RootElement
	);
}
/*

 <Route path="/" component={App}>
 <Route path="admin">
 <IndexRoute component={AdminIndex}/>

 <Route path="categories">
 <IndexRoute component={CategoryIndex}/>

 <Route path="create" component={CategoryCreate}/>
 <Route path=":id">
 <IndexRoute component={CategoryShow}/>
 <Route path="edit" component={CategoryEdit}/>
 </Route>
 </Route>

 <Route path="articles">
 <IndexRoute component={ArticlesIndex}/>
 <Route path="create" component={ArticlesCreate}/>
 </Route>

 <Route path="comments">
 <IndexRoute component={CommentsIndex}/>
 </Route>
 </Route>

 <Route path="auth">
 <Route path="login" component={Login}/>
 <Route path="registration" component={Registration}/>
 <Route path="logout" component={Logout}/>
 </Route>
 <Route path="tasks">
 <IndexRoute component={TasksIndex}/>
 </Route>
 </Route>
 */
