import React from 'react';

function Header(props){
    return(
    <header className="header" id={props.id}>
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">LAMBDA PHI EPSILON</span>
        <span className="heading-primary--sub">{props.sub}</span>
      </h1>
    </div>
  </header>
    );
};

export default Header;