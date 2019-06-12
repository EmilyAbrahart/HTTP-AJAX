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
		length: 0,
		isEditing: false
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
			.finally(() =>
				this.setState({ spinner: false, length: this.state.friends.length })
			);
	};

	componentDidMount() {
		this.getFriends();
	}

	toggleForm = () => {
		this.setState({
			isEditing: !this.state.isEditing
		});
	};

	buttonText = () => {
		return this.state.isEditing ? 'Close Form' : 'Add Friend';
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
						isEditing={this.state.isEditing}
						length={this.state.length}
					/>
				</FormContainerDiv>
				{this.state.errorMessage && <div>{this.state.errorMessage}</div>}
				{this.state.spinner && (
					<div className="loading">Loading friends...</div>
				)}
				{this.state.friends && (
					<FriendListDiv>
						{this.state.friends.map(friend => (
							<Friend key={friend.id} {...friend} />
						))}
					</FriendListDiv>
				)}
			</FriendListContainer>
		);
	}
}
