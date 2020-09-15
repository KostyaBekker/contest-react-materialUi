import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import ScoringMain from './ScoringMain';
// import './css/competition.css';

// eslint-disable-next-line react/prefer-stateless-function
class Scoring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 'Таолу',
      discipline: 'Спортивное ушу',
      version: '',
      group: '',
      groupData: ''
    };
  }

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
      discipline: discipline,  
    });
  };

  renderVersion = (version, discipline) => {
    // console.log(section);
    if (discipline === 'Спортивное ушу') {
      return (
        <div className="sanshawGroup">
          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={version} onChange={e => this.сhangeVersion(e.target.value)}>
              <FormControlLabel
                value="Группа А (Техника)"
                control={<Radio color="primary" size="small" />}
                label="Группа А (Техника)"
              />
              <FormControlLabel
                value="Группа В (Общее впечатление)"
                control={<Radio color="primary" size="small" />}
                label="Группа В (Общее впечатление)"
              />
              <FormControlLabel
                value="Группа С (сложности и их соединение)"
                control={<Radio color="primary" size="small" />}
                label="Группа С (сложности и их соединение)"
              />
            </RadioGroup>
          </FormControl>
        </div>
      );
    }
  };

  сhangeVersion = (version) => {
    this.setState({ 
      version,
      group: ''
    });
  };

  сhangeGroup = (group) => {
    this.setState({ 
      group,
      groupData: ''
    });
  };

  сhangeGroupData = (groupData) => {
    this.setState({ groupData });
  };

  renderMain = (discipline, section, version, group, groupData) => {
    return (
      <div>
        <ScoringMain
          section={section}
          discipline={discipline}
          version={version}
          group={group}
          groupData={groupData}
          сhangeGroup={this.сhangeGroup}
          сhangeGroupData={this.сhangeGroupData}
        />
      </div>
    );
  };

  render() {
    const {
      section,
      discipline,
      version,
      group,
      groupData
    } = this.state;
    // console.log(section, discipline, version);
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
          {/* {this.renderSanshaw(discipline, group, typeGroup)} */}
          {this.renderVersion(version, discipline)}
          {this.renderMain(discipline, section, version, group, groupData)}
        </div>
        <div className="button__general__setting">
          <Button
            style={{
              width: '50%',
            }}
            size="small"
            variant="outlined"
            // onClick={() => this.addAge(section)}
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
)(Scoring);
