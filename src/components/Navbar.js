import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/" 
                  activeStyle={{ color:'black' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/About" 
                  activeStyle={{ color: 'black' }}
                >
                    About
                </NavLink>
                <NavLink 
                  to="/Contact" 
                  activeStyle={{ color: 'black' }}
                >
                    Contact
                </NavLink>
                <NavLink 
                  to="/Signin" 
                  activeStyle={{ color: 'black' }}
                >
                    Login
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/Signup">Sign Up</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;