import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import './css/competitionEvents.css';

const rowsWeapon = [
  {
    weapon: 'Кулак',
    data: [
      'Чаньцюань',
      'Наньцюань',
      'Тайцзицюань',
    ]
  },
  {
    weapon: 'Короткое оружие',
    data: [
      'Цзяньшу',
      'Даошу',
      'Наньдао',
      'Тайцзицянь',
    ]
  },
  {
    weapon: 'Длинное оружие',
    data: [
      'Цяньшу',
      'Гуньшу',
      'Наньгунь',
    ]
  }
];

// eslint-disable-next-line react/prefer-stateless-function
class CompetitionEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 'Таолу',
      discipline: 'Спортивное ушу/Modern taoly',
      value: ''
    };
  }

  editSection = (sectionName) => {
    this.setState({ section: sectionName });
    this.setState({ discipline: '' });
  };

  editDiscipline = (disciplineName) => {
    this.setState({ discipline: disciplineName });
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
            color={discipline === 'Спортивное ушу/Modern taoly' ? 'primary' : 'default'}
            onClick={() => this.editDiscipline('Спортивное ушу/Modern taoly')}
          >
            Спортивное ушу/Modern taoly
          </Button>
          <Button
            size="small"
            className="button__form"
            variant="outlined"
            component="label"
            color={discipline === 'Традиционное ушу/Traditional taolu' ? 'primary' : 'default'}
            onClick={() => this.editDiscipline('Традиционное ушу/Traditional taolu')}
          >
            Традиционное ушу/Traditional taolu
          </Button>
        </div>
      );
    }
  };

  editWeapon = (value) => {
    this.setState({ value })
  };

  renderWeapon = (section, discipline) => {
    if (discipline === 'Спортивное ушу/Modern taoly') {
      return (
        <div className="block__weapon">
          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" value={this.state.value} onChange={e => this.editWeapon(e.target.value)}>
              {rowsWeapon.map((item, index) => {
                return (
                  <FormControlLabel
                    key={ index }
                    value={item.weapon}
                    control={<Radio color="primary" size="small" />}
                    label={item.weapon}
                  />
                );
              })
              }
            </RadioGroup>
          </FormControl>
        </div>
      );
    }
  };

  render() {
    const { section, discipline, value } = this.state;
    console.log(section, discipline, value);

    return (
      <div className="main__list__data">
        <div className="list__data">
          <Button
            size="small"
            className="button__form"
            variant="outlined"
            component="label"
            color={section === 'Таолу' ? 'primary' : 'default'}
            onClick={() => this.editSection('Таолу')}
          >
            Таолу
          </Button>
          <Button
            size="small"
            className="button__form"
            variant="outlined"
            component="label"
            color={section === 'Саньшоу' ? 'primary' : 'default'}
            onClick={() => this.editSection('Саньшоу')}
          >
            Саньшоу
          </Button>
          {this.disciplineGroup(section, discipline)}
          {this.renderWeapon(section, discipline)}
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
