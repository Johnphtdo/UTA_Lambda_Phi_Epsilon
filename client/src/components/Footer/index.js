import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return(
  <footer className="footer">
    <div className="footer__logo-box">
      <Link to="/" className="footer">
        {/* <!-- Replace ChapterIcon.png in the img folder with your chapter's icon or use your school's icon. Change file format below if neccessary --> */}
        <img src={require("../../assets/img/ChapterIcon.png")} alt="Full Chapter logo" className="footer__logo" />
      </Link>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/brothers" className="footer__link">Brothers</Link>
            </li>
            <li className="footer__item">
              <Link to="/events" className="footer__link">Events</Link>
            </li>
            <li className="footer__item">
              <Link to="/recruitment" className="footer__link">Recruitment</Link>
            </li>
            <li className="footer__item">
              {/* <!-- Change links under to to match your chapter --> */}
              <a rel="noopener noreferrer" href="https://www.instagram.com/arlingtonlambdas/?hl=en" target="_blank"
                className="footer__link">Instagram</a>
            </li>
            <li className="footer__item">
              {/* <!-- Change links under to to match your chapter --> */}
              <a rel="noopener noreferrer" href="https://twitter.com/arlingtonlphie?lang=en" target="_blank" className="footer__link">Twitter</a>
            </li>
            <li className="footer__item">
              {/* <!-- Change links under to to match your chapter --> */}
              <a rel="noopener noreferrer" href="https://www.facebook.com/pg/arlington.lambdas/posts/" target="_blank"
                className="footer__link">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-1-of-2">
        {/* <!-- Please leave this if you are going to use the template; helps me build my network/brand. --> */}
        <p className="footer__copyright">
          Built by&nbsp;
          <a rel="noopener noreferrer" href="https://www.linkedin.com/in/johnphtdo/" target="_blank" className="footer__link">John Do</a>
          &nbsp;to be used by chapters of Lambda Phi Epsilon. Credit to original
          author,&nbsp;
          <a rel="noopener noreferrer" href="https://www.udemy.com/user/jonasschmedtmann/" target="_blank" className="footer__link">Jonas
            Schmedtmann</a>
            &nbsp;for providing resources to help build parts of this website.
        </p>
      </div>
    </div>
  </footer>

    );
};

export default Footer;