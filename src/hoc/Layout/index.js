import React, { Component } from 'react';
import './Layout.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer'

class Layout extends Component {
  state = {
    showMenu: false
  }
  render() {
    return (
      <div>
        <Header showMenu={this.state.showMenu}/>
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
