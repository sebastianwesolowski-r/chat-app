import React from 'react';
import {Route} from 'react-router-dom';

import GlobalStyle from './global-style';

import HomePage from './pages/home/home.component';
import ChatPage from './pages/chat/chat.component';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/chat" component={ChatPage} />
    </>
  )
}

export default App;
