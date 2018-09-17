import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './containers/Main';
import Layout from './hoc/Layout';
class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Main} />
        <Redirect to="/" component={Main} />
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
