import React from 'react';
import axios from 'axios';
import Friend from './Friend';


export default class FriendList extends React.Component {
	state = {
		friends: null,
		errorMessage: '',
		spinner: false
	};

	getFriends = () => {
		this.setState({
			spinner: true
		});

		axios
			.get('http://localhost:5000/friends')
			.then(res =>
				this.setState({
					friends: res.data
				})
			)
			.catch(err =>
				this.setState({
					errorMessage: err.message
				})
			)
			.finally(() => this.setState({ spinner: false }));
	};

	componentDidMount() {
		this.getFriends();
	}

	render() {
    console.log(this.state.friends)
		return (
      
			<div>
        <h1>Friends List</h1>
        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
        {this.state.spinner && <div className="loading">Loading friends...</div>}
				{this.state.friends && 
					<div className="friendList">
						{this.state.friends.map(friend => (
					<Friend key={friend.id} {...friend}/>
						))}
					</div>
				}
			</div>
		);
	}
}
