import React, {Component} from 'react';

const userList = [
	{
		name: 'lxy',
		age: 29,
		id: 0
	},
	{
		name: 'wyh',
		age: 24,
		id: 1
	},
	{
		name: 'cxy',
		age: 27,
		id: 2
	},
];

class Users extends Component {
	render() {
		const user = userList.map((item) => 
			<li key={item.id}>name: {item.name}, age: {item.age}</li>
		);

		return (
			<div>
				<ul>
					{user}
				</ul>
			</div>
		);
	}
}

export default Users;