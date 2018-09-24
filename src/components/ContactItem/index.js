import React from 'react';
import { textSecondary, contactItem } from './ContactItem.scss';

const ContactItem = (props) => {
  return (
    <div className={contactItem}>
      <span className={textSecondary}>{props.item.type}: </span>
      {props.item.value}
    </div>
  );
};

export default ContactItem;
