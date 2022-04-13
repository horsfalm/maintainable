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
    // <header className="bg-success mb-4 py-2 flex-row align-center">
    //   <div className="container flex-row justify-space-between-lg justify-center align-center">
    //     <Link to="/">
    //       <h1>Maintainable</h1>
    //     </Link>

    //     <nav className="text-center">
    //       {Auth.loggedIn() ? (
    //         <>
    //           <Link to="/search"><i className="fas fa-search"></i></Link>
    //           <Link to="/dashboard">Dashboard</Link>
    //           <a href="/" onClick={logout}>Logout</a>
    //         </>
    //       ) : (
    //         <>
    //         <Link to="/login">Login</Link>
    //         </>
    //       )}
    //       </nav>
    //   </div>
    // </header>


    <>
       <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>Home</MDBNavbarBrand>
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
              <MDBNavbarLink href='/dashboard'>Dashboard</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/search'><MDBIcon fas icon="search" /></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink  href="/" onClick={logout} tabIndex={-1} aria-disabled='true'>
                Logout
              </MDBNavbarLink>
            </MDBNavbarItem>
            </>
           ) : (
           <>
           <MDBNavbarItem>
              <MDBNavbarLink href='/login'>Login</MDBNavbarLink>
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
