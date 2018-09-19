import React from 'react';
import {branding, portrait, show} from './Branding.scss';

const Branding = (props) => {

  let attachedClasses = props.showMenu ? [branding, show] : [branding]

  return (
    <div className={attachedClasses.join(' ')}>
      <div className={portrait} />
    </div>
  );
};
export default Branding;
