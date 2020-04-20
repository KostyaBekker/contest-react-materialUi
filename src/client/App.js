/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './redux/actionsAdmin';

import Login from './components/containers/Login';

import ListCompetitions from './components/containers/ListCompetitions';

import СreateСompetition from './components/containers/newCompetition/CreateСompetition';
import GeneralSettings from './components/containers/newCompetition/GeneralSettings';
import CompetitionEvents from './components/containers/newCompetition/CompetitionEvents';
import AgeCategories from './components/containers/newCompetition/AgeCategories';
import OrganizationalConditions from './components/containers/newCompetition/OrganizationalConditions';
import Judging from './components/containers/newCompetition/Judging';
import Scoring from './components/containers/newCompetition/Scoring';
import Administration from './components/containers/newCompetition/Administration';
import Language from './components/containers/newCompetition/Language';
import Seminar from './components/containers/newCompetition/Seminar';

import MainLayout from './components/containers/competition/MainLayout';
import Сompetition from './components/containers/competition/Сompetition';
import Print from './components/containers/competition/Print';
import Settings from './components/containers/competition/Settings';


class App extends Component {
  render() {
    // console.log(this.props.user.name);
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/"><Login /></Route>

            <Route exact path="/list_competitions"><ListCompetitions /></Route>

            <Route exact path="/general_settings">
              <СreateСompetition>
                <GeneralSettings />
              </СreateСompetition>
            </Route>
            <Route exact path="/competition_events">
              <СreateСompetition>
                <CompetitionEvents />
              </СreateСompetition>
            </Route>
            <Route exact path="/age_categories">
              <СreateСompetition>
                <AgeCategories />
              </СreateСompetition>
            </Route>
            <Route exact path="/organizational_conditions">
              <СreateСompetition>
                <OrganizationalConditions />
              </СreateСompetition>
            </Route>
            <Route exact path="/judging">
              <СreateСompetition>
                <Judging />
              </СreateСompetition>
            </Route>
            <Route exact path="/scoring">
              <СreateСompetition>
                <Scoring />
              </СreateСompetition>
            </Route>
            <Route exact path="/administration">
              <СreateСompetition>
                <Administration />
              </СreateСompetition>
            </Route>
            <Route exact path="/language">
              <СreateСompetition>
                <Language />
              </СreateСompetition>
            </Route>
            <Route exact path="/seminar">
              <СreateСompetition>
                <Seminar />
              </СreateСompetition>
            </Route>

            <Route exact path="/print">
              <MainLayout>
                <Print />
              </MainLayout>
            </Route>
            <Route exact path="/main">
              <MainLayout>
                <Сompetition />
              </MainLayout>
            </Route>
            <Route exact path="/settings">
              <MainLayout>
                <Settings />
              </MainLayout>
            </Route>
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
