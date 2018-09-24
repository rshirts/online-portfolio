import React, { Component } from 'react';
import { connect } from 'react-redux';
import { frame, lgHeading, smHeading, textSecondary, icons, title} from './Home.scss';
import {FaGithub, FaLinkedin,  } from 'react-icons/fa'
import ExternalLink from '../../components/ExternalLink'

class Home extends Component {
  render() {
    return (
      <div className={frame}>
        <h1 className={`${lgHeading} ${title}`}>
          {this.props.person.firstName} <span className={textSecondary}>{this.props.person.lastName}</span>
        </h1>
        <h2 className={smHeading}>
          Web Developer, Software Engineer, Designer & Entreprenuer
        </h2>
        {/* using external links with react-router-dom isn't yet supported natively recommended using http anchor tags.
         https://github.com/ReactTraining/react-router/issues/1147 */}
        <div className={icons}>
          <ExternalLink link='https://github.com/rshirts'><FaGithub /></ExternalLink>
          <ExternalLink link='https://www.linkedin.com/in/rshirts/'><FaLinkedin /></ExternalLink>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  person : state.home.person
});

export default connect(mapStateToProps)(Home);
