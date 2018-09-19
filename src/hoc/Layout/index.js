import React, { Component } from 'react';
import './Layout.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer'

class Layout extends Component {
  state = {
    showMenu: false
  }

  //This will toggle the state for showing the when the menu button is clicked or elsewhere.
  handleMenuButtonClick = () => {
    console.log(this.state.showMenu);
    this.setState ((prevState) => {
      return {showMenu: !prevState.showMenu}
    })

  }
  render() {
    return (
      <div>
        <Header showMenu={this.state.showMenu} click={this.handleMenuButtonClick} />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
