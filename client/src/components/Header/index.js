import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-success mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Maintainable</h1>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <a><i className="fas fa-search"></i></a>
              <Link to="/dashboard">Dashboard</Link>
              <a href="/" onClick={logout}>Logout</a>
            </>
          ) : (
            <>
            <Link to="/login">Login</Link>
            </>
          )}
          </nav>
      </div>
    </header>
  );
};

export default Header;
