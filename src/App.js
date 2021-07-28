import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './components/Home';
import './App.css';
import AuthContext from './store/auth-context';
import Layout from './components/layout/Layout';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>

      {authCtx.isLoggedIn && (
        <Route path='/home'>
          <Layout>
            <Home />
          </Layout>
        </Route>
      )}

      <Route path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
  );
}

export default App;
