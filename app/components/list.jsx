import React, {Component} from 'react';
import { BroswerRouter as Router, Route, Link } from 'react-router-dom';
import Styles from '../style/common.css'

const Lists = ({match}) => (
	<div>
		<ul className={Styles.list}>
			<li>
				<Link to={`/lists/react`}>React</Link>
			</li>
			<li>
				<Link to={`/lists/vue`}>Vue</Link>
			</li>
			<li>
				<Link to={`/lists/angular`}>Angular</Link>
			</li>
		</ul>
		<Route path={`/lists/:id`} component={Topic} />
		<Route exact path="/lists" render={()=>(<h3>Select a framework</h3>)} />
	</div>
);

const Topic = ({match}) => {
	console.log(match);
	return (
		<div>
			<h2>The best framework is: {match.params.id}!</h2>
		</div>
	)
};

export default Lists;