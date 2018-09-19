import React from 'react'
import {menu, show} from './Menu.scss';
import MenuItem from './MenuItem';

const Menu = (props) => {

  const attachedMenuClasses = props.showMenu ? [menu, show] : [menu];

  return (
    <ul className={attachedMenuClasses.join(' ')}>
      <MenuItem exact={props.exact} link='/' showMenu={props.showMenu}>HOME</MenuItem>
      <MenuItem link='/about' showMenu={props.showMenu}>ABOUT</MenuItem>
      <MenuItem link='/work' showMenu={props.showMenu}>WORK</MenuItem>
      <MenuItem link='/contact' showMenu={props.showMenu}>CONTACT</MenuItem>
    </ul>
  )

  // return (
  //     <ul className={attachedMenuClasses.join(' ')}>
  //       <li className={attachedItemClasses.join(' ')}>
  //         <a href="" className={link}>HOME</a>
  //       </li>
  //       <li className={attachedItemClasses.join(' ')}>
  //         <a href="about.html" className={link}>ABOUT</a>
  //       </li>
  //       <li className={attachedItemClasses.join(' ')}>
  //         <a href="work.html" className={link}>MY WORK</a>
  //       </li>
  //       <li className={attachedItemClasses.join(' ')}>
  //         <a href="contact.html" className={link}>HOW TO REACH ME</a>
  //       </li>
  //     </ul>
  // )
}

export default Menu
