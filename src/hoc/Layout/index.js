import React, { Component } from 'react';
import './Layout.scss';
import Header from '../../components/Header';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
