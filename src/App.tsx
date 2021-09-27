import React, { useContext } from 'react';

import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Login from './components/Auth/Login';
import AuthContext from './store/auth.context';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import StartingPageContent from './components/StartingPage/StartingPageContent';

const App: React.FC = () => {
  const authCtx = useContext(AuthContext);
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
      <Route path='/' exact>
          <StartingPageContent/>
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path='/login'>
            <Login/>
          </Route>
        )}
        <Route path='/profile'>
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
    </Switch>
    </Layout>
    </BrowserRouter>
    
  );
}

export default App;
