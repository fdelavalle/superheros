import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Results from './components/search/Results';
import './App.css';
import AuthContext from './store/auth-context';
import { TeamMembersContextProvider } from './store/teamMembers-context';
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
          <TeamMembersContextProvider>
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
          </TeamMembersContextProvider>
        </React.Fragment>
      )}

      <Route path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
  );
}

export default App;
