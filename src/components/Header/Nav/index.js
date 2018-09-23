import React from 'react';
import './Nav.scss';
import Branding from './Branding';
import NavMenu from './NavMenu';
import {show, hide} from './Nav.scss'

const Nav = (props) => {

  return (
    <nav className={props.showNavMenu ? show : hide} onClick={props.click}>
      <Branding showNavMenu={props.showNavMenu} />
      <NavMenu showNavMenu={props.showNavMenu} />
    </nav>
  )
};

export default Nav;
