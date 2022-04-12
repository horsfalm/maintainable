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
      <nav class="navbar" role="navigation" aria-label="main navigation">
        
        <div class="navbar-brand">
          <Link to="/">
       
                <img class="m-2" src="./MaintainabeSighn.svg" alt="Maintainable Name SVG"/>
            
          </Link>
        </div>
        
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
            
              {Auth.loggedIn() ? (
                <>
                  <a class="button is-primary"><i className="fas fa-search"></i></a>
                    <Link to="/dashboard">Dashboard</Link>
                  <a href="/" onClick={logout}>Logout</a>
                </>
              ) : (
                <>
                <Link to="/login">
                  <a class="button is-warning">
                    Login
                  </a>
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
