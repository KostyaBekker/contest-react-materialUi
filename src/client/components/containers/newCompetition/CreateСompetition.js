import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


import { connect } from 'react-redux';

import './css/createCompetition.css';

// eslint-disable-next-line react/prefer-stateless-function
class CreateCompetition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setting: window.location.pathname
    };
  }

  checkSettting = (settingType) => {
    this.setState({ setting: settingType });
  };

  render() {
    const { children } = this.props;
    const { setting } = this.state;
    // console.log(setting);
    return (
      <div className="create__wrap">
        <div className="create__block">
          <div className="setting__block">
            <div className="list__setting">
              <ul>
                <Link
                  to="/general_settings"
                  style={{
                    textDecoration: 'none',
                    color: setting === '/general_settings' ? 'blue' : 'black'
                  }}
                  onClick={() => this.checkSettting('/general_settings')}
                >
                  <li>
                    Основные установки/general settings
                  </li>
                </Link>
                <Link
                  to="/competition_events"
                  style={{
                    textDecoration: 'none',
                    color: setting === '/competition_events' ? 'blue' : 'black'
                  }}
                  onClick={() => this.checkSettting('/competition_events')}
                >
                  <li>
                    Виды соревнования/competition events
                  </li>
                </Link>
                <Link
                  to="/age_categories"
                  style={{
                    textDecoration: 'none',
                    color: setting === '/age_categories' ? 'blue' : 'black'
                  }}
                  onClick={() => this.checkSettting('/age_categories')}
                >
                  <li>
                    Возрастные категории/age categories
                  </li>
                </Link>
                <Link
                  to="/judging"
                  style={{
                    textDecoration: 'none',
                    color: setting === '/judging' ? 'blue' : 'black'
                  }}
                  onClick={() => this.checkSettting('/judging')}
                >
                  <li>
                    Судейство/judging
                  </li>
                </Link>
                <Link
                  to="/scoring"
                  style={{
                    textDecoration: 'none',
                    color: setting === '/scoring' ? 'blue' : 'black'
                  }}
                  onClick={() => this.checkSettting('/scoring')}
                >
                  <li>
                    Оценивание/scoring
                  </li>
                </Link>
                <Link
                  to="/administration"
                  style={{
                    textDecoration: 'none',
                    color: setting === '/administration' ? 'blue' : 'black'
                  }}
                  onClick={() => this.checkSettting('/administration')}
                >
                  <li>
                    Администрирование/administration
                  </li>
                </Link>
                <Link
                  to="/language"
                  style={{
                    textDecoration: 'none',
                    color: setting === '/language' ? 'blue' : 'black'
                  }}
                  onClick={() => this.checkSettting('/language')}
                >
                  <li>
                    Язык/Language
                  </li>
                </Link>
              </ul>
            </div>
            <div className="button__setting">
              <Link to="/list_competitions" style={{ textDecoration: 'none' }}>
                <Button
                  size="small"
                  variant="outlined"
                  // onClick={() => this.updateType('timetable')}
                >
                  OK
                </Button>
              </Link>
              <Button
                size="small"
                variant="outlined"
                // onClick={() => this.updateType('age')}
              >
                Apply
              </Button>
              <Link to="/list_competitions" style={{ textDecoration: 'none' }}>
                <Button
                  size="small"
                  variant="outlined"
                  // onClick={() => this.updateType('www')}
                >
                  Exit
                </Button>
              </Link>
            </div>
          </div>
          <div className="main__create__block">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

CreateCompetition.propTypes = {
  children: PropTypes.node.isRequired,
};


export default connect(
  null,
  { }
)(CreateCompetition);
