import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
