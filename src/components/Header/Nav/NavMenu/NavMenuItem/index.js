import React from 'react'
import {NavLink} from 'react-router-dom'
import {item, show, active} from './NavMenuItem.scss'

const MenuItem = (props) => {

  const attachedItemClasses = props.showNavMenu ? [item, show] : [item];

  return (
    <li className={attachedItemClasses.join(' ')}>
      <NavLink activeClassName={active} exact={props.exact} to={props.link}>{props.children}</NavLink>
    </li>
  )
}

export default MenuItem