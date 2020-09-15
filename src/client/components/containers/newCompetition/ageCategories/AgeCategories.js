import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TaolySanshawAge from './TaolySanshawAge';

import { sendAge } from '../../../../redux/actionsAge';

// import './css/competition.css';


// eslint-disable-next-line react/prefer-stateless-function
class AgeCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // ageData: [],
      section: 'Таолу',
      discipline: 'Спортивное ушу',
    };
  }

  addAge = () => {
    const { sendAge } = this.props;
    sendAge();
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

  editDiscipline = (disciplineName) => {
    this.setState({
      discipline: disciplineName,
    });
  };

  editSection = (sectionName, discipline) => {
    this.setState({
      section: sectionName,
      discipline: discipline
    });
  };

  renderAgeGroups = (section, discipline) => {
    return (
      <div>
        <TaolySanshawAge
          typeSection={section}
          typeDiscipline={discipline}
          // weapon={weapon}
          // ageData={ageData}
          // changeAgeData={this.changeOption}
          // changeWeapon={this.changeWeapon}
        />
      </div>
    );
  };

  render() {
    const { section, discipline } = this.state;
    // console.log(section, discipline);
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
            onClick={() => this.editSection('Саньшоу', 'Саньшоу')}
          >
            Саньшоу
          </Button>
          {this.disciplineGroup(section, discipline)}
          {this.renderAgeGroups(section, discipline)}
        </div>
        <div className="button__general__setting">
          <Button
            style={{
              width: '50%',
            }}
            size="small"
            variant="outlined"
            onClick={() => this.addAge(section)}
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

AgeCategories.propTypes = {
  sendAge: PropTypes.func.isRequired,
};

export default connect(
  null,
  { sendAge }
)(AgeCategories);
