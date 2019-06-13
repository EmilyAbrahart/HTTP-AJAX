import React from 'react';
import FriendList from './components/FriendList';
import styled from 'styled-components';
import {FlexFunc} from './components/ReusableStyles';

const AppDiv = styled.div`
${FlexFunc('column', 'center', 'center')}

`

function App() {
  return (
    <AppDiv>
      <FriendList />
    </AppDiv>
  );
}

export default App;
