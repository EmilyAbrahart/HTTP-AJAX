import React from 'react';
import styled from 'styled-components';
import { FlexFunc, Button } from './ReusableStyles';

const FriendFormElement = styled.form`
	width: 100%;
	${FlexFunc('column', 'center', 'center')};
	background: #bb1233;
	padding: 2rem;
	box-sizing: border-box;
	display: ${props => (props.isEditing ? 'flex' : 'none')};
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
		friendEmail: ''
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

	clearForm = () => {
		this.setState({
			friendName: '',
			friendAge: '',
			friendEmail: ''
		});
	};

	postNewFriend = event => {
		event.preventDefault();
		this.props.addNewFriend(
			this.state.friendName,
			this.state.friendAge,
			this.state.friendEmail
		);
		this.clearForm();
	};

	deleteFriend = () => {
		this.props.deleteFriend(this.props.id);
	};

	render() {
		return (
			<FriendFormElement
				isEditing={this.props.isEditing}
				onSubmit={this.postNewFriend}
				onReset={this.clearForm}
			>
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
							type="number"
							onChange={this.ageChangeHandler}
							value={this.state.friendAge}
						/>
					</FormItem>
					<FormItem>
						Email: <br />
						<InputElement
							type="email"
							onChange={this.emailChangeHandler}
							value={this.state.friendEmail}
						/>
					</FormItem>
				</FriendFormItemContainer>
				<div>
					<FormButton type="submit">Submit</FormButton>
					<FormButton type="reset">Clear</FormButton>
				</div>
			</FriendFormElement>
		);
	}
}
