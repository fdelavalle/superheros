import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { Link, useLocation } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const Navbar = () => {
  const authCtx = useContext(AuthContext);

  const { pathname } = useLocation();

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <nav className='navbar navbar-dark' style={{ backgroundColor: '#081734' }}>
      <div className='container-fluid'>
        {pathname === '/search' && (
          <Link to='/home' style={{ textDecoration: 'none' }}>
            <button className='btn btn-outline-primary'>
              <BsArrowLeft />
            </button>
          </Link>
        )}

        <Link to='/home' style={{ textDecoration: 'none' }}>
          <span className='navbar-brand mb-0 h1'>Superheros App</span>
        </Link>

        <button
          type='button'
          className='btn btn-outline-primary'
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
