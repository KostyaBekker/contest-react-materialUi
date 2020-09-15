import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TaolySanshaw from './TaolySanshaw';

import '../css/competitionEvents.css';

// eslint-disable-next-line react/prefer-stateless-function
class CompetitionEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weapon: '',
      option: '',
      section: 'Таолу',
      discipline: 'Спортивное ушу',
    };
  }

  editSection = (sectionName, discipline) => {
    this.setState({
      section: sectionName,
      discipline,
      weapon: '',
      option: ''
    });
  };

  editDiscipline = (disciplineName, option) => {
    this.setState({ 
      discipline: disciplineName,
      weapon: '',
      option
    });
  };

  disciplineGroup = (section, discipline) => {
    if (section === 'Таолу') {
      return (
        <div>
          <Button
            size="small"
            className="button__form"
            variant="outlined"
            component="label"
            color={discipline === 'Спортивное ушу' ? 'primary' : 'default'}
            onClick={() => this.editDiscipline('Спортивное ушу', '')}
          >
            Спортивное ушу/Modern taoly
          </Button>
          <Button
            size="small"
            className="button__form"
            variant="outlined"
            component="label"
            color={discipline === 'Традиционное ушу' ? 'primary' : 'default'}
            onClick={() => this.editDiscipline('Традиционное ушу', 'Вариант 1')}
          >
            Традиционное ушу/Traditional taolu
          </Button>
        </div>
      );
    }
  };

  changeOption = (option) => {
    this.setState({ option });
  };

  changeWeapon = (weapon) => {
    this.setState({ weapon });
  };

  renderWeapon = (section, discipline, weapon, option) => {
    return (
      <div>
        <TaolySanshaw
          typeSection={section}
          typeDiscipline={discipline}
          weapon={weapon}
          option={option}
          changeOption={this.changeOption}
          changeWeapon={this.changeWeapon}
        />
      </div>
    );
  };

  render() {
    const { section, discipline, weapon, option } = this.state;
    // console.log(option);

    return (
      <div className="main__list__data">
        <div className="list__data">
          <Button
            size="small"
            className="button__form"
            variant="outlined"
            component="label"
            color={section === 'Таолу' ? 'primary' : 'default'}
            onClick={() => this.editSection('Таолу', 'Спортивное ушу')}
          >
            Таолу
          </Button>
          <Button
            size="small"
            className="button__form"
            variant="outlined"
            component="label"
            color={section === 'Саньшоу' ? 'primary' : 'default'}
            onClick={() => this.editSection('Саньшоу', '')}
          >
            Саньшоу
          </Button>
          {this.disciplineGroup(section, discipline)}
          {this.renderWeapon(section, discipline, weapon, option)}
        </div>
        <div className="button__general__setting">
          <Button
            style={{
              width: '50%',
            }}
            size="small"
            variant="outlined"
            // onClick={() => this.updateType('timetable')}
          >
            Save
          </Button>
          <Button
            style={{
              width: '50%',
            }}
            size="small"
            variant="outlined"
            // onClick={() => this.updateType('age')}
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { }
)(CompetitionEvents);
