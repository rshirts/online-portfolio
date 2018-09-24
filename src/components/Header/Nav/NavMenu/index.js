import React from 'react'
import {navMenu, show} from './NavMenu.scss';
import NavMenuItem from './NavMenuItem';

const Menu = (props) => {

  const attachedMenuClasses = props.showNavMenu ? [navMenu, show] : [navMenu];

  return (
    <ul className={attachedMenuClasses.join(' ')}>
      <NavMenuItem exact link='/' showNavMenu={props.showNavMenu}>HOME</NavMenuItem>
      <NavMenuItem link='/about' showNavMenu={props.showNavMenu}>ABOUT</NavMenuItem>
      <NavMenuItem link='/projects' showNavMenu={props.showNavMenu}>PROJECTS</NavMenuItem>
      <NavMenuItem link='/contact' showNavMenu={props.showNavMenu}>CONTACT</NavMenuItem>
    </ul>
  )
}

export default Menu
