// Navigation Tab
// AcPortfolio
// Customer
// Report
// SingleAc

import React from "react";
import { Link } from "react-router-dom"

function Navigation() {
  return (
    <nav className="navbar">
      <ul className="flex-row">
        <li className="mx-2">
          <Link to="/AcPortfolio">AcPortfolio</Link>
        </li>
        <li className="mx-2">
          <Link to="/Customer">Customer</Link>
        </li>
        <li className="mx-2">
          <Link to="/Report">Report</Link>
        </li>
        <li className="mx-2">
          <Link to="/SingleAc">SingleAc</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;