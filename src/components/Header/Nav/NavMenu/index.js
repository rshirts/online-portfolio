import React from 'react'
import {menu, show} from './NavMenu.scss';
import NavMenuItem from './NavMenuItem';

const Menu = (props) => {

  const attachedMenuClasses = props.showNavMenu ? [menu, show] : [menu];

  return (
    <ul className={attachedMenuClasses.join(' ')}>
      <NavMenuItem exact={props.exact} link='/' showNavMenu={props.showNavMenu}>HOME</NavMenuItem>
      <NavMenuItem link='/about' showNavMenu={props.showNavMenu}>ABOUT</NavMenuItem>
      <NavMenuItem link='/work' showNavMenu={props.showNavMenu}>WORK</NavMenuItem>
      <NavMenuItem link='/contact' showNavMenu={props.showNavMenu}>CONTACT</NavMenuItem>
    </ul>
  )
}

export default Menu
