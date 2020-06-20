import React from "react";
import { Link } from "react-router-dom";


const Navbutton = () => {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

      <label for="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              Home
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/brothers" className="navigation__link">
              Brothers
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/events" className="navigation__link">
              Events
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/recruitment" className="navigation__link">
              Recruitment
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbutton;
