/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './redux/actionsAdmin';

import Login from './components/containers/Login';
import Main from './components/containers/Main';


class App extends Component {

  render() {
    // console.log(this.props.user.name);
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/"><Login /></Route>
            <Route exact path="/main"><Main /></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth,
});

export default connect(
  mapStateToProps,
  { login }
)(App);
