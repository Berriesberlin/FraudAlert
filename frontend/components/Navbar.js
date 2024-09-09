import React, { useContext } from 'react';
import { AuthContext } from '../App';

const Navbar = () => {
  const {user, handleLogout} = useContext(AuthContext);
  return (
    <nav>
      <a href="/" className='navbar-logo'><img src="/fraudaware_logo.ico"/></a>
      <ul>
        {user ? (
          <>
            <li><a href='/post'>POST</a></li>
          </>
        ) : (
          <>
          </>
        )}
        <li><a href='/real-stories'>REAL STORIES</a></li>
        <li><a href='/workshop'>WORKSHOP</a></li>
        <li><a href='/volunteer'>VOLUNTEER</a></li>
        <li><a href='/about'>ABOUT US</a></li>
        {user ? (
          <>
            <li><a href="/" onClick={handleLogout}>LOGOUT</a></li>
          </>
        ) : (
          <>
            <li><a href='/login'>LOGIN</a></li>
          </>
        )}
      </ul>
      {user && (
        <span className="username-style">Welcome! {user.firstName} {user.lastName}</span>

      )}
    </nav>
  );
};

export default Navbar;
