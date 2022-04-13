import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {

  const handleLogout = async event => {
    event.preventDefault();
    try{

      await Auth.logout();
      
    }catch (e) {
      console.error(e);
    }
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
              <Link to="/search"><i className="fas fa-search"></i></Link>
              <Link to="/dashboard">Dashboard</Link>
              <a href="/" onClick={handleLogout}>Logout</a>
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

export default withRouter(Header);
