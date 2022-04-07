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
                Maintenance Machine
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/" 
                  activeStyle={{ color:'white' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/About" 
                  activeStyle={{ color: 'white' }}
                >
                    About
                </NavLink>
                <NavLink 
                  to="/Contact" 
                  activeStyle={{ color: 'white' }}
                >
                    Contact
                </NavLink>
                <NavLink 
                  to="/Signin" 
                  activeStyle={{ color: 'white' }}
                >
                    Sign In
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