import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import './css/mainLayout.css';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'timetable',
    };
  }

  updateType = (type) => {
    this.setState({ type });
  };

  render() {
    const { children } = this.props;
    const { type } = this.state;
    return (
      <div>
        <div className="main__header">
          <Link to="/main" style={{ textDecoration: 'none' }}>
            <Button
              size="small"
              variant="contained"
              // color="secondary"
              color={type === 'timetable' ? 'default' : 'primary'}
              onClick={() => this.updateType('timetable')}
            >
              Соревнования
            </Button>
          </Link>
          <Link to="/print" style={{ textDecoration: 'none' }}>
            <Button
              size="small"
              variant="contained"
              color={type === 'age' ? 'default' : 'primary'}
              onClick={() => this.updateType('age')}
            >
              Печать
            </Button>
          </Link>
          <Link to="/settings" style={{ textDecoration: 'none' }}>
            <Button
              size="small"
              variant="contained"
              color={type === 'www' ? 'default' : 'primary'}
              onClick={() => this.updateType('www')}
            >
              Настройки
            </Button>
          </Link>
        </div>
        {children}
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default connect(
  null,
  { }
)(MainLayout);
