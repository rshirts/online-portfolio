import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Work from './containers/Work';
import Layout from './hoc/Layout';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/work" component={Work} />
        <Redirect to="/home" component={Home} />
      </Switch>
    );
    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default App;
