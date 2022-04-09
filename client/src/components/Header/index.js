import React from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';


export default function App() {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='home'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>

              <nav>
          {Auth.loggedIn() ? (
            <>
              <Link to="/techdashbord">Tech dashbord</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/logintech">Tech Login</Link>
            </>
          )}
        </nav>

              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Log Out</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}