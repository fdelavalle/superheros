import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './components/home/Home';
import Results from './components/search/Results';
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
        <React.Fragment>
          <Route path='/home'>
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path='/search'>
            <Layout>
              <Results />
            </Layout>
          </Route>
        </React.Fragment>
      )}

      <Route path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
  );
}

export default App;
