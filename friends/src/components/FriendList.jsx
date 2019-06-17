import React from 'react';
import axios from 'axios';
import Friend from './Friend';
import styled from 'styled-components';
import { FlexFunc, Button } from './ReusableStyles';
import FriendForm from './FriendForm';

const FriendListContainer = styled.div`
	${FlexFunc('column', 'space-between', 'center')};
	height: 100%;
	width: 100%;
`;

const FriendListDiv = styled.div`
	${FlexFunc('row', 'space-evenly', 'center')};
	flex-wrap: wrap;
`;

const PageHeader = styled.h1`
	color: white;
`;
const AddFriendButton = styled.button`
	${Button('white', '#bb1233')}
`;

const FormContainerDiv = styled.div`
	width: 100%;
`;

export default class FriendList extends React.Component {
	state = {
		friends: [],
		errorMessage: '',
		spinner: false,
		isEditing: false,
		isUpdating: false,
		friendIdToUpdate: '',
		name: '',
		age: '',
		email: '',
		shouldUpdate: false
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

	toggleForm = () => {
		if (this.state.isEditing || this.state.isUpdating) {
			this.setState({
				name: '',
				age: '',
				email: '',
				isEditing: false,
				isUpdating: false,
				shouldUpdate: true
			});
		} else {
			this.setState({
				isEditing: true
			});
		}
	};

	buttonText = () => {
		return this.state.isEditing || this.state.isUpdating
			? 'Close Form'
			: 'Add Friend';
	};

	deleteFriend = props => {
		axios
			.delete(`http://localhost:5000/friends/${props}`)
			.then(res =>
				this.setState({
					friends: res.data
				})
			)
			.catch(err => console.log(err));
	};

	addNewFriend = (propName, propAge, propEmail) => {
		const friendObject = {
			name: propName,
			age: propAge,
			email: propEmail
		};

		axios
			.post('http://localhost:5000/friends', friendObject)
			.then(res =>
				this.setState({
					friends: res.data
				})
			)
			.catch(err => console.log(err));
	};

	updateFriend = propID => {
		this.setState({
			isEditing: false,
			isUpdating: true,
			friendIdToUpdate: propID,
			name: this.state.friends.find(friend => friend.id === propID).name,
			age: this.state.friends.find(friend => friend.id === propID).age,
			email: this.state.friends.find(friend => friend.id === propID).email,
			shouldUpdate: true
		});
	};

	putFriend = (propName, propAge, propEmail, propID) => {
		const updatedFriendObject = {
			name: propName,
			age: propAge,
			email: propEmail
		};
		axios
			.put(`http://localhost:5000/friends/${propID}`, updatedFriendObject)
			.then(res =>
				this.setState({
					friends: res.data,
					isUpdating: false
				})
			)
			.catch(err => console.log(err));
	};

	componentUpdated = () => {
		this.setState({
			shouldUpdate: false
		});
	};

	render() {
		return (
			<FriendListContainer>
				<PageHeader>Friends List</PageHeader>
				<AddFriendButton onClick={this.toggleForm}>
					{this.buttonText()}
				</AddFriendButton>
				<FormContainerDiv>
					<FriendForm
						componentUpdated={this.componentUpdated}
						shouldUpdate={this.state.shouldUpdate}
						isEditing={this.state.isEditing}
						length={this.state.length}
						addNewFriend={this.addNewFriend}
						isUpdating={this.state.isUpdating}
						putFriend={this.putFriend}
						name={this.state.name}
						age={this.state.age}
						email={this.state.email}
						id={this.state.friendIdToUpdate}
					/>
				</FormContainerDiv>
				{this.state.errorMessage && <div>{this.state.errorMessage}</div>}
				{this.state.spinner && (
					<div className="loading">Loading friends...</div>
				)}
				{this.state.friends && (
					<FriendListDiv>
						{this.state.friends.map(friend => (
							<Friend
								key={friend.id}
								{...friend}
								deleteFriend={this.deleteFriend}
								updateFriend={this.updateFriend}
							/>
						))}
					</FriendListDiv>
				)}
			</FriendListContainer>
		);
	}
}
