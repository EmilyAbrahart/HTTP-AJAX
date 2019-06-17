import React from 'react';
import styled from 'styled-components';
import { FlexFunc, Button } from './ReusableStyles';

const FriendDiv = styled.div`
	background-color: white;
	margin: 1rem;
	padding: 1.5rem 4rem 0 4rem;
	border-radius: 1rem;
	${FlexFunc('column', 'space-between', 'center')};
	line-height: 1.5rem;
	position: relative;
	border: ${props => (props.isMenuOpen ? '2px solid white' : 'none')};
	height: 230px;
  width: 350px;
  box-sizing: border-box;
`;

const FriendInfo = styled.div`
	font-size: 1rem;
	width: 100%;
	text-align: center;
`;
const FriendInfoTitle = styled(FriendInfo)`
	font-weight: bold;
`;

const NameDiv = styled(FriendInfo)`
	font-weight: bold;
	color: #bb1233;
	align-self: center;
	font-size: 1.3rem;
`;

const FriendMenu = styled.div`
	color: #bb1233;
	font-weight: bold;
	cursor: pointer;
	align-self: center;
	padding: 0.5rem 4rem;
`;

const ButtonContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
  width: 40%;
  background: rgba(187,18,51,0.9);
	${FlexFunc('column', 'space-evenly', 'center')}
  display: ${props => (props.isMenuOpen ? 'flex' : 'none')};
  border-radius: 1rem 0 0 1rem;
`;

const UpdateButton = styled.button`
	${Button('white','#bb1233')}
`;

const RemoveButton = styled.button`
	${Button('white', '#bb1233')}
`;

const CloseMenuButton = styled.div`
	color: white;
	font-size: 1.5rem;
	font-weight: bold;
	position: absolute;
	top: 0;
	right: 0.7rem;
	cursor: pointer;
`;

export default class Friend extends React.Component {
	state = {
		menuOpen: false
	};

	openMenu = () => {
		this.setState({
			menuOpen: true
		});
	};

	closeMenu = () => {
		this.setState({
			menuOpen: false
		});
  };
  
  deleteFriend = () => {
    this.props.deleteFriend(this.props.id)
	}
	
	updateFriend = () => {
		this.props.updateFriend(this.props.id)
	};

	render() {
		return (
			<FriendDiv isMenuOpen={this.state.menuOpen}>
				<NameDiv>{this.props.name}</NameDiv>
				<FriendInfo>
					<FriendInfoTitle>Age</FriendInfoTitle> {this.props.age}
				</FriendInfo>
				<FriendInfo>
					<FriendInfoTitle>Email</FriendInfoTitle> {this.props.email}
				</FriendInfo>
				<FriendMenu onClick={this.openMenu}>. . .</FriendMenu>
				<ButtonContainer isMenuOpen={this.state.menuOpen}>
					<CloseMenuButton onClick={this.closeMenu}>x</CloseMenuButton>
					<UpdateButton onClick={this.updateFriend} >Update</UpdateButton>
					<RemoveButton onClick={this.deleteFriend}>Remove</RemoveButton>
				</ButtonContainer>
			</FriendDiv>
		);
	}
}
