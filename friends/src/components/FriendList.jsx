import React from 'react';
import axios from 'axios';
import Friend from './Friend';
import styled from 'styled-components';
import {FlexFunc} from './ReusableStyles';

const FriendListContainer = styled.div`
${FlexFunc('column', 'space-between', 'center')};
height: 100%;
width: 100%;
`

const FriendListDiv = styled.div`
${FlexFunc('row', 'space-evenly', 'center')};
flex-wrap: wrap;
`

const PageHeader = styled.h1`
color: white;
`

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
      
			<FriendListContainer>
        <PageHeader>Friends List</PageHeader>
        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
        {this.state.spinner && <div className="loading">Loading friends...</div>}
				{this.state.friends && 
					<FriendListDiv>
						{this.state.friends.map(friend => (
					<Friend key={friend.id} {...friend}/>
						))}
					</FriendListDiv>
				}
			</FriendListContainer>
		);
	}
}
