import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/actionsAdmin';
// import InputAdornment from '@material-ui/core/InputAdornment';
import '../../app.css';

// eslint-disable-next-line react/prefer-stateless-function
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      password: '',
      showPassword: false,
    };
  }

  updateInput = (input) => {
    document.querySelector('.isValidEmail').classList.remove('isValidStyle');
    this.setState({ input });
  };

  updatePassword = (password) => {
    document.querySelector('.isValidPassword').classList.remove('isValidStyle');
    this.setState({ password });
  };

  handleClickShowPassword = () => {
    this.setState({ ...this.state, showPassword: !this.state.showPassword });
  };

//  handleMouseDownPassword = event => {
//     event.preventDefault();
//   };

  isValid = () => {
    // const valid = document.querySelector('.isValidEmail');
    const { input, password } = this.state;
    let isValidLogin = true;
    let isValidPassword = true;
    if (input === '') {
      document.querySelector('.isValidEmail').classList.add('isValidStyle');
      isValidLogin = false;
    }
    if (password === '') {
      document.querySelector('.isValidPassword').classList.add('isValidStyle');
      isValidPassword = false;
    }
    if (isValidLogin && isValidPassword) {
      return true;
    }
  }

  login = (login, password) => {
    if (this.isValid()) {
      this.props.login(login, password);
      this.setState({
        input: '',
        password: ''
      });
      document.querySelector('.link').click();
    }
  };

  render() {
    const { input, password, showPassword } = this.state;
    // console.log(showPassword);

    return (
      <div className="form__wrap">
        <div>
          <TextField
            id="standard-basic"
            label="Login"
            className="isValidEmail"
            onChange={e => this.updateInput(e.target.value)}
            value={input}
          />
          <br />
          {/* <TextField
            id="standard-basic"
            label="Password"
            className="isValidPassword"
            onChange={e => this.updatePassword(e.target.value)}
            value={password}
          /> */}
          <br />
          <FormControl>
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              style={{ width: '165px' }}
              id="standard-basic"
              type={showPassword ? 'text' : 'password'}
              value={password}
              label="Password"
              className="isValidPassword"
              onChange={e => this.updatePassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    // aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    // onMouseDown={this.handleMouseDownPassword}
                  >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <br />
          <Button variant="contained" onClick={() => this.login(input, password)}>
            Enter
          </Button>
          <Link className="link" to="/main" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth,
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
