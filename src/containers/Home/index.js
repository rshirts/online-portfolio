import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Home} from './Home.scss';
// This is the main container for the website.
class Main extends Component {
  render() {
    return (
      <div className={Home}>
        What's up from main!
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  person : state.main.person
});

const mapDispatchToProps = (disptach) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
