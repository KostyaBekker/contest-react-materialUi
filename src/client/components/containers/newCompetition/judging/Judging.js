import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import JudgingMain from './JudgingMain';

// eslint-disable-next-line react/prefer-stateless-function
class Juding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // ageData: [],
      section: 'Таолу',
      discipline: 'Спортивное ушу',
      group1: '',
      group2: '',
      typeGroup: '',
      version: '',
      groupA: {
        sideJudge: '',
        numberPoints: '',
        gradingControl: false,
        allowedScatter: '',
        decimalPointJudges: '',
        decimalPointAverage: ''
      },
      groupB: {
        sideJudge: '',
        seniorJudge: false,
        refereeJudge: false,
        gradingControl: false,
        numberPoints: '',
        rejectionAssessment: false,
        decimalPointJudges: '',
        decimalPointAverage: ''
      },
      groupC: {
        sideJudge: '',
        numberPoints: '',
        decimalPointJudges: '',
      },
      judgesSanshaw: ''
    };
  }

  // addAge = () => {
  //   this.props.sendAge();
  // };

  editJudgesSanshaw = (judgesSanshaw) => {
    // console.log(judgesSanshaw);
    this.setState({ judgesSanshaw });
  };

  editGroupA = (value, key) => {
    this.setState(state => (state.groupA[key] = value, state))
  };

  editGroupB = (value, key) => {
    this.setState(state => (state.groupB[key] = value, state))
  };

  editGroupC = (value, key) => {
    this.setState(state => (state.groupC[key] = value, state))
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
      group1: '',
      group2: '',
      typeGroup: '',
      version: '',
      groupA: {
        sideJudge: '',
        numberPoints: '',
        gradingControl: false,
        allowedScatter: '',
        decimalPointJudges: '',
        decimalPointAverage: ''
      },
      groupB: {
        sideJudge: '',
        seniorJudge: false,
        refereeJudge: false,
        gradingControl: false,
        numberPoints: '',
        rejectionAssessment: false,
        decimalPointJudges: '',
        decimalPointAverage: ''
      },
      groupC: {
        sideJudge: '',
        numberPoints: '',
        decimalPointJudges: '',
      },
    });
  };

  editSection = (sectionName, discipline) => {
    this.setState({
      section: sectionName,
      discipline: discipline,
      group1: '',
      group2: '',
      typeGroup: '',
      version: '',
      judgesSanshaw: '',
      groupA: {
        sideJudge: '',
        numberPoints: '',
        gradingControl: false,
        allowedScatter: '',
        decimalPointJudges: '',
        decimalPointAverage: ''
      },
      groupB: {
        sideJudge: '',
        seniorJudge: false,
        refereeJudge: false,
        gradingControl: false,
        numberPoints: '',
        rejectionAssessment: false,
        decimalPointJudges: '',
        decimalPointAverage: ''
      },
      groupC: {
        sideJudge: '',
        numberPoints: '',
        decimalPointJudges: '',
      },
    });
  };

  editGroup1 = (group1) => {
    this.setState({
      typeGroup: 'Новая группа1',
      group2: '',
      group1
    });
  };

  editGroup2 = (group2) => {
    this.setState({
      typeGroup: 'Новая группа2',
      group1: '',
      group2
    });
  };

  editTypeGroup = (typeGroup) => {
    // console.log(typeGroup);
    this.setState({
      typeGroup,
      group1: '',
      group2: ''
    });
  };

  renderSanshaw = (discipline, group1, group2, typeGroup) => {
    if (discipline === 'Саньшоу') {
      return (
        <div className="sanshawGroup">
          <FormControl component="fieldset" className="sanshawGroup">
            <RadioGroup
              aria-label="gender"
              value={typeGroup}
              onChange={e => this.editTypeGroup(e.target.value)}
              style={{ display: 'block' }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <FormControlLabel
                  value="Санда"
                  control={<Radio color="primary" size="small" />}
                  style={{ margin: '0px' }}
                  label="Санда"
                />
                <FormControlLabel
                  value="Цинда"
                  control={<Radio color="primary" size="small" />}
                  label="Цинда"
                  style={{ margin: '0px' }}
                />
                <FormControlLabel
                  value="Туйшоу"
                  control={<Radio color="primary" size="small" />}
                  style={{ margin: '0px' }}
                  label="Туйшоу"
                />
                <FormControlLabel
                  value="Винчун поединки"
                  control={<Radio color="primary" size="small" />}
                  label="Винчун поединки"
                  style={{ margin: '0px' }}
                />
                <div style={{ display: 'flex' }}>
                  <FormControlLabel
                    value="Новая группа1"
                    control={<Radio color="primary" size="small" />}
                    style={{ margin: '0px' }}
                    // label="По возрасту (полных лет)"
                  />
                  <TextField
                    size="small"
                    // style={{ padding: '5px' }}
                    variant="outlined"
                    // label="-"
                    type="text"
                    value={group1}
                    onChange={e => this.editGroup1(e.target.value)}
                  />
                </div>
                <div style={{ display: 'flex' }}>
                  <FormControlLabel
                    value="Новая группа2"
                    control={<Radio color="primary" size="small" />}
                    style={{ margin: '0px' }}
                    // label="По возрасту (полных лет)"
                  />
                  <TextField
                    size="small"
                    // style={{ padding: '5px' }}
                    variant="outlined"
                    // label="-"
                    type="text"
                    value={group2}
                    onChange={e => this.editGroup2(e.target.value)}
                  />
                </div>
              </div>
            </RadioGroup>
          </FormControl>
        </div>
      )
    }
  };

  renderMain = (discipline, section, judgesSanshaw, groupA, groupB, groupC) => {
    return (
      <div>
        <JudgingMain
          section={section}
          discipline={discipline}
          judgesSanshaw={judgesSanshaw}
          editJudgesSanshaw={this.editJudgesSanshaw}
          groupA={groupA}
          editGroupA={this.editGroupA}
          groupB={groupB}
          editGroupB={this.editGroupB}
          groupC={groupC}
          editGroupC={this.editGroupC}
          // changeWeapon={this.changeWeapon}
        />
      </div>
    );
  };

  сhangeVersion = (version) => {
    this.setState({ version });
  };

  renderVersion = (version, section) => {
    // console.log(section);
    if (section === 'Таолу') {
      return (
        <div className="sanshawGroup">
          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={version} onChange={e => this.сhangeVersion(e.target.value)}>
              <FormControlLabel
                value="Полная версия (удаленное выставление кодов судьями)"
                control={<Radio color="primary" size="small" />}
                label="Полная версия (удаленное выставление кодов судьями)"
              />
              <FormControlLabel
                value="Средняя версия (удаленное внесение оценок судьями)"
                control={<Radio color="primary" size="small" />}
                label="Средняя версия (удаленное внесение оценок судьями)"
              />
              <FormControlLabel
                value="Малая версия (внесение оценок вручную секретарем)"
                control={<Radio color="primary" size="small" />}
                label="Малая версия (внесение оценок вручную секретарем)"
              />
            </RadioGroup>
          </FormControl>
        </div>
      );
    }
    if (section === 'Саньшоу') {
      return (
        <div className="sanshawGroup">
          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={version} onChange={e => this.сhangeVersion(e.target.value)}>
              <FormControlLabel
                value="Полная версия (удаленное выставление судьями баллов онлайн)"
                control={<Radio color="primary" size="small" />}
                label="Полная версия (удаленное выставление судьями баллов онлайн)"
              />
              <FormControlLabel
                value="Средняя версия (удаленное внесение судьями баллов в конце раунда)"
                control={<Radio color="primary" size="small" />}
                label="Средняя версия (удаленное внесение судьями баллов в конце раунда)"
              />
              <FormControlLabel
                value="Малая версия (внесение баллов вручную секретарем)"
                control={<Radio color="primary" size="small" />}
                label="Малая версия (внесение баллов вручную секретарем)"
              />
            </RadioGroup>
          </FormControl>
        </div>
      );
    }
  };

  render() {
    const {
      section,
      discipline,
      group1,
      group2,
      typeGroup,
      version,
      judgesSanshaw,
      groupA,
      groupB,
      groupC
    } = this.state;
    // console.log(groupC);
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
          {this.renderSanshaw(discipline, group1, group2, typeGroup)}
          {this.renderVersion(version, section)}
          {this.renderMain(discipline, section, judgesSanshaw, groupA, groupB, groupC)}
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


export default connect(
  null,
  { }
)(Juding);
