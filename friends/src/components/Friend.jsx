import React from 'react';
import styled from 'styled-components';
import {FlexFunc, Button} from './ReusableStyles';

const FriendDiv = styled.div`
background-color: white;
margin: 1rem;
padding: 1.5rem 3rem;
border-radius: 1rem;
`
const ButtonContainer = styled.div`
${FlexFunc('row', 'space-evenly', 'center')}
padding-top: 1rem;
`

const UpdateButton = styled.button`
${Button('#bb1233')}
`

const RemoveButton = styled.button`
${Button('#bb1233')}
`

const Friend = (props) => {
  return (
    <FriendDiv>
    <div className="name">{props.name}</div>
    <div className="age">Age: {props.age}</div>
    <div className="email">Email: {props.email}</div>
    <ButtonContainer>
    <UpdateButton>Update</UpdateButton>
    <RemoveButton>Remove</RemoveButton>
    </ButtonContainer>
    
  </FriendDiv>
  )
}

export default Friend;