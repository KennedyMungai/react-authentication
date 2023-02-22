import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthContext from './components/store/auth-context';
import AuthPage from './pages/AuthPage';
import Error from './pages/Error';
import HomePage from './pages/HomePage';

function App()
{
  const authCtx = useContext(AuthContext)

  const isLoggedIn = authCtx.isLoggedIn

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {
          !isLoggedIn &&
          <Route path='/auth'>
            <AuthPage />
          </Route>
        }
        {
          isLoggedIn &&
          <Route path='/profile'>
            <UserProfile />
          </Route>
        }
        <Route path='*'>
          {/* <Error /> */}
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
