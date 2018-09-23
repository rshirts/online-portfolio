import React, { Component } from 'react';
import { connect } from 'react-redux';
import { home, lgHeading, smHeading, textSecondary, name, icons} from './Home.scss';
import {FaGithub, FaLinkedin,  } from 'react-icons/fa'
import ExternalLink from '../../components/ExternalLink'

class Home extends Component {
  render() {
    return (
      <div className={home}>
        <h1 className={`${lgHeading} ${name}`}>
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

const mapDispatchToProps = (disptach) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
