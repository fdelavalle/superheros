import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './components/Home';
import './App.css';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      {authCtx.isLoggedIn && (
        <Route path='/home'>
          <Home />
        </Route>
      )}
      <Route path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
  );
}

export default App;
