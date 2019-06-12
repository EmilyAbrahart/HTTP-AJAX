import React from 'react';
import styled from 'styled-components';
import { FlexFunc, Button } from './ReusableStyles';

const FriendDiv = styled.div`
	background-color: white;
	margin: 1rem;
	padding: 1.5rem 3rem 0 3rem;
	border-radius: 1rem;
	${FlexFunc('column', 'space-between', 'center')}
	line-height: 1.5rem;
	position: relative;
	border: ${props => (props.isMenuOpen ? '2px solid white' : 'none')};
	height: 200px;
	width: 300px;
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
	${Button('white')}
`;

const RemoveButton = styled.button`
	${Button('white')}
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

export default class FriendList extends React.Component {
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
					<UpdateButton>Update</UpdateButton>
					<RemoveButton>Remove</RemoveButton>
				</ButtonContainer>
			</FriendDiv>
		);
	}
}
