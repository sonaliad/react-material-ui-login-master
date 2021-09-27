import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../store/auth.context';
// import classes from './MainNavigation.module.css';
import { Wrapper } from './MainNavigation.styles';

const MainNavigation: React.FC = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  return (
    <Wrapper>
    <header className='header'>
      <Link to='/'>
        <div className='logo'>Choco</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
    </Wrapper>
  );
};

export default MainNavigation;
