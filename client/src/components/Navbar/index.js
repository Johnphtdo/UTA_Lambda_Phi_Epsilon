import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav" role="navigation">
      <ul className="nav__list">
        <li className="nav__list-item">
          <Link className="nav__link" to="/UTA_Lambda_Phi_Epsilon/">
            Home
          </Link>
        </li>
        <li className="nav__list-item">
          <Link className="nav__link" to="/UTA_Lambda_Phi_Epsilon/events">
            Events
          </Link>
        </li>
        <li className="nav__list-item">
          <Link className="nav__link" to="/UTA_Lambda_Phi_Epsilon/brothers">
            Brothers
          </Link>
        </li>
        <li className="nav__list-item">
          <Link className="nav__link" to="/UTA_Lambda_Phi_Epsilon/recruitment">
            Recruitment
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
