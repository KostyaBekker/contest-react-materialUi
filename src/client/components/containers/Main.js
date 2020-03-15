import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../main.css';


// eslint-disable-next-line react/prefer-stateless-function
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // componentWillMount = () => {
  //   document.querySelector('.form__wrap').remove();
  // }

  render() {

    return (
      <div className="main__wrap">
        <div>
          <div className="main__header">
            first header
          </div>
          <div className="main__header">
            second header
          </div>
        </div>
        <div className="main__block">
          <div className="main__contest">
            left block
          </div>
          <div className="main__about_sportsman">
            right block
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { }
)(Main);