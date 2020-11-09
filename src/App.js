import React from 'react';
import {Route, Switch} from 'react-router-dom';

import GlobalStyle from './global-style';

import HomePage from './pages/home/home.component';
import ChatPage from './pages/chat/chat.component';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/chat" component={ChatPage} />
      </Switch>
    </>
  )
}

export default App;
