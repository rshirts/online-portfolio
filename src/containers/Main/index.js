import React, { Component } from 'react';
import { connect } from 'react-redux';
import './main.scss';
// This is the main container for the website.
class Main extends Component {
  render() {
    return (
      <main>
        What's up from main!
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  person : state.main.person
});

const mapDispatchToProps = (disptach) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
