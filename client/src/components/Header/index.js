import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  const [showNav, setShowNav] = useState(false);
  return (
    <>
       <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/' ><MDBIcon className='ms-1' icon='home' size='2x' /></MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>

          
           {Auth.loggedIn() ? (
             <>
            <MDBNavbarItem>
              <MDBNavbarLink className="fw-bolder" href="/" onClick={logout} tabIndex={-1} aria-disabled='true'>
                Logout
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="fw-bolder" href='/dashboard'>Dashboard</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/search'><MDBIcon fas icon="search" /></MDBNavbarLink>
            </MDBNavbarItem>
            </>
           ) : (
           <>
           <MDBNavbarItem>
              <MDBNavbarLink className="fw-bolder" href='/login'>Login</MDBNavbarLink>
            </MDBNavbarItem>
             
             </>
           )}
           
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    <br />
      
    </>


  );
};

export default Header;
