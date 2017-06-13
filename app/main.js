import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/component.jsx';
import Lists from './components/list.jsx';
import SearchBox from './components/search.jsx';
import Users from './components/users.jsx';

// 不使用react-router的情况下
/*
class App extends Component {
	constructor() {
		super();
		this.state = {
			route: window.location.hash.substr(1)
		}
	}

	componentDidMount() {
		window.addEventListener('hashchange', () => {
			this.setState({
				route: window.location.hash.substr(1)
			})
		})
	}

	render() {

		let Child;

		switch( this.state.route ) {
			case '/list': 
				Child = Lists;
				break;
			case '/users': 
				Child = Users;
				break;
			case '/search': 
				Child = SearchBox;
				break;
			default:
				Child = Home;
		}

		return (
			<div>
				<h1>No route test</h1>
				<ul>
					<li><a href="#/list">home</a></li>
					<li><a href="#/users">users</a></li>
					<li><a href="#/search">search</a></li>
				</ul>
				<Child />
			</div>
		)
	}
}
*/

const routes = [
	{
		path: '/',
		exact: true,
		sidebar: () => <div>home!</div>,
		main: Home
	},
	{
		path: '/users',
		sidebar: () => <div>users!</div>,
		main: Users
	},
	{
		path: '/lists',
		sidebar: () => <div>lists!</div>,
		main: Lists
	},
	{
		path: '/search',
		sidebar: () => <div>search!</div>,
		main: SearchBox
	},
];

// 使用 react-router-dom 的写法
class App extends Component {
	render() {
		return (
			<Router>
				<div style={{ display: 'flex' }}>
					<div style={{ padding: '10px', width: '40%', backgroundColor: '#f0f0f0' }}>
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/users">Users</Link></li>
							<li><Link to="/lists">Lists</Link></li>
							<li><Link to="/search">Search</Link></li>
						</ul>
						{
							routes.map((route, index) => (
								<Route key={index} path={route.path} exact={route.exact} component={route.sidebar} />
							))
						}
					</div>

					<div style={{ flex: '1', padding: '10px' }}>
						{
							routes.map((route, index) => (
								<Route key={index} path={route.path} exact={route.exact} component={route.main} />
							))
						}
					</div>
	
				</div>
			</Router>
		);
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#content')
);