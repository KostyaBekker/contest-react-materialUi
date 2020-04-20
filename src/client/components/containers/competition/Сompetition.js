import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Button from '@material-ui/core/Button';
import CompetitionInfoBlock from './CompetitionInfoBlock';
import SportsmansInfoBlock from './SportsmansInfoBlock';
import AboutSportsmanBlock from './AboutSportsmanBlock';


import './css/competition.css';


// eslint-disable-next-line react/prefer-stateless-function
class Сompetition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      competition: {},
      sportsman: {}
    };
  }

  competitionData = (value) => {
    this.setState({ sportsman: {} });
    this.setState({ competition: value });
  };

  sportsmanData = (value) => {
    this.setState({ sportsman: value });
  };

  render() {
    const { competition, sportsman } = this.state;
    return (
      <div className="main__wrap">
        <div className="main__block">
          <div className="info_competition">
            <CompetitionInfoBlock competitionData={this.competitionData} />
          </div>
          <div className="sportsman__block">
            <div className="list_sportsmans">
              <SportsmansInfoBlock competition={competition} sportsman={sportsman} sportsmanData={this.sportsmanData} />
            </div>
            <div className="main__about_sportsman">
              <AboutSportsmanBlock sportsman={sportsman} />
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { }
)(Сompetition);
