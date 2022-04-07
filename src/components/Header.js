//Needs to include Name and pull in Navigation component
import React, { useState } from 'react';
import Navigation from "./Navigation";
import AcPortfolio from "./AcPortfolio";
import Customer from "./Customer";
import Report from "./Report";
import SingleAc from "./SingleAc";
import Login from "./Login"

function Header() {
  const [currentPage, handlePageChange] = useState("Login");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "AcPortfolio":
        return <AcPortfolio />;
      case "Customer":
        return <Customer />;
      case "Report":
        return <Report />;
      case "SingleAc":
        return <SingleAc />;

      default:
        return <Login />;
    }
  }
};
export default Header;