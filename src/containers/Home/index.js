import React, { Component } from 'react';
import { connect } from 'react-redux';
import { home, lgHeading, smHeading, textSecondary, name } from './Home.scss';

// This is the main container for the website.
class Home extends Component {

  render() {
    const joinedClasses = [lgHeading, name];
    return (
      <div className={home}>
        <h1 className={joinedClasses.join(' ')}>
          Randee <span className={textSecondary}>Shirts</span>
        </h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  person : state.home.person
});

const mapDispatchToProps = (disptach) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
