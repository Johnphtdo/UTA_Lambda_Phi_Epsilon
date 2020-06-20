import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav" role="navigation">
      <ul className="nav__list">
        <li className="nav__list-item">
          <Link className="nav__link" to="/">
            Home
          </Link>
        </li>
        <li className="nav__list-item">
          <Link className="nav__link" to="/events">
            Events
          </Link>
        </li>
        <li className="nav__list-item">
          <Link className="nav__link" to="/brothers">
            Brothers
          </Link>
        </li>
        <li className="nav__list-item">
          <Link className="nav__link" to="/recruitment">
            Recruitment
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
