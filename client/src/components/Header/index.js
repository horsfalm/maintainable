import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';


const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/">
                <img className="m-2" src="./MaintainabeSighn.svg" alt="Maintainable Name SVG"/>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {Auth.loggedIn() ? (
                <>
                  <button className="button is-warning is-medium"><i className="fas fa-search"></i></button>
                    <Link to="/dashboard">Dashboard</Link>
                  <a href="/" onClick={logout}>Logout</a>
                </>
              ) : (
                <>
                <Link to="/login">
                  <button className="button is-warning is-medium">
                    Login
                  </button>
                </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
