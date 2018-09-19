import React, { Component } from 'react';
import { connect } from 'react-redux';
import { home } from './Home.scss';
// This is the main container for the website.
class Home extends Component {
  render() {
    return <div className={home}>What's up from Home!</div>;
  }
}

const mapStateToProps = (state) => ({
  person : state.home.person
});

const mapDispatchToProps = (disptach) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
