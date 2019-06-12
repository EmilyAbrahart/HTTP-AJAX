import React from 'react';
import styled from 'styled-components';
import { FlexFunc, Button } from './ReusableStyles';
import axios from 'axios';

const FriendFormElement = styled.form`
	width: 100%;
	${FlexFunc('column', 'center', 'center')};
	background: #bb1233;
	padding: 2rem;
  box-sizing: border-box;
  display: ${props => props.isEditing ? 'flex' : 'none'};
`;
const FriendFormItemContainer = styled.div`
	${FlexFunc('row', 'center', 'center')}
`;
const InputElement = styled.input`
	width: 300px;
	border: 1px solid rgba(187, 18, 51, 0.9);
	border-radius: 1rem;
	height: 1.5rem;
	text-align: center;
	margin: 0 1rem;
	outline: none;
`;

const AgeInputElement = styled(InputElement)`
	width: 200px;
`;

const FormButton = styled.button`
	${Button('white', '#bb1233')}
  margin-top: 0.5rem;
  outline: none;
`;

const FormItem = styled.div`
	${FlexFunc('column', 'center', 'center')};
	color: white;
`;

export default class FriendForm extends React.Component {
	state = {
		friendName: '',
		friendAge: '',
    friendEmail: '',
    
  };
  

	nameChangeHandler = event => {
		this.setState({
			friendName: event.target.value
		});
	};

	ageChangeHandler = event => {
		this.setState({
			friendAge: event.target.value
		});
	};

	emailChangeHandler = event => {
		this.setState({
			friendEmail: event.target.value
		});
  };
  

	postNewFriend = () => {
		axios
			.post('http://localhost:5000/friends', {
				name: this.state.friendName,
				age: this.state.friendAge,
				email: this.state.friendEmail
			})
			.then(res => console.log(res))
			.catch(err => console.log(err));
	};

	render() {
		return (
			<FriendFormElement isEditing={this.props.isEditing} onSubmit={this.postNewFriend}>
				<FriendFormItemContainer>
					<FormItem>
						Name: <br />
						<InputElement
							type="text"
							onChange={this.nameChangeHandler}
							value={this.state.friendName}
						/>
					</FormItem>
					<FormItem>
						Age: <br />
						<AgeInputElement
							type="text"
							onChange={this.ageChangeHandler}
							value={this.state.friendAge}
						/>
					</FormItem>
					<FormItem>
						Email: <br />
						<InputElement
							type="text"
							onChange={this.emailChangeHandler}
							value={this.state.friendEmail}
						/>
					</FormItem>
				</FriendFormItemContainer>
				<div>
					<FormButton type='submit'>
						Submit
					</FormButton>
          <FormButton type='reset'>
						Cancel
					</FormButton>
				</div>
			</FriendFormElement>
		);
	}
}
