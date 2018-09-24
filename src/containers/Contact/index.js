import React, { Component } from 'react';
import { connect } from 'react-redux';
import { textSecondary, frame, lgHeading, title } from './Contact.scss';
import ContactItem from '../../components/ContactItem'

class Contact extends Component {

  render() {

    const contactItem = this.props.info.map(item => {
      return (
        <ContactItem key={item.type} item={item} />
      )
    })

    return (
      <div className={frame}>
        <h1 className={`${lgHeading} ${title}`}>
          Contact <span className={textSecondary}>Me</span>
        </h1>
        <div className="boxes">
          {contactItem}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  info : state.contact.info
});

export default connect(mapStateToProps)(Contact);
