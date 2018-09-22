import React from 'react'
import {NavLink} from 'react-router-dom'
import {item, show, active} from './MenuItem.scss'

const MenuItem = (props) => {

  const attachedItemClasses = props.showMenu ? [item, show] : [item];

  return (
    <li className={attachedItemClasses.join(' ')}>
      <NavLink activeClassName={active} exact={props.exact} to={props.link}>{props.children}</NavLink>
    </li>
  )
}

export default MenuItem