/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import '../css/judging.css';

// eslint-disable-next-line react/prefer-stateless-function
class JudgigMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: ''
    };
  }

  сhangeAge = (judgesSanshaw) => {
    // console.log(judgesSanshaw);
    const { editJudgesSanshaw } = this.props;
    editJudgesSanshaw(judgesSanshaw);
    // this.props.editJudgesSanshaw(judgesSanshaw);
  };

  сhangeGroupA = (value, key) => {
    this.setState({ a: '' });
    const { editGroupA } = this.props;
    editGroupA(value, key);
    // this.props.editGroupA(value, key);
  };

  сhangeGroupB = (value, key) => {
    this.setState({ a: '' });
    const { editGroupB } = this.props;
    editGroupB(value, key);
    // this.props.editGroupB(value, key);
  };

  сhangeGroupC = (value, key) => {
    this.setState({ a: '' });
    const { editGroupC } = this.props;
    editGroupC(value, key);
    // this.props.editGroupC(value, key);
  };

  modernTaolu = (discipline, groupC) => {
    if (discipline === 'Спортивное ушу') {
      return (
        <div className="radiusForm">
          <p style={{ margin: '16px 50px' }}>
            <b>Группа С</b>
          </p>
          <div style={{ width: '100%', display: 'flex' }}>
            <div style={{ width: '50%' }}>
              <FormControl variant="outlined" className="data__form__judging" size="small">
                <InputLabel>Количество боковых судей:</InputLabel>
                <Select
                  value={groupC.sideJudge}
                  onChange={e => this.сhangeGroupC(e.target.value, 'sideJudge')}
                  label="Количество боковых судей:"
                >
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" className="data__form__judging" size="small">
                <InputLabel>Количество баллов:</InputLabel>
                <Select
                  value={groupC.numberPoints}
                  onChange={e => this.сhangeGroupC(e.target.value, 'numberPoints')}
                  label="Количество баллов:"
                >
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div style={{ width: '50%' }}>
              <FormControl variant="outlined" className="data__form__judging" size="small">
                <InputLabel>Количество цифр после запятой:</InputLabel>
                <Select
                  value={groupC.decimalPointJudges}
                  onChange={e => this.сhangeGroupC(e.target.value, 'decimalPointJudges')}
                  label="Количество цифр после запятой:"
                >
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="5">5</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      );
    }
  };

  renderMain = (discipline, section, judgesSanshaw, groupA, groupB, groupC) => {
    // console.log(groupA);
    if (section === 'Таолу') {
      return (
        <div className="radiusForm">
          <div className="radiusForm">
            <p style={{ margin: '16px 50px' }}>
              <b>Группа А</b>
            </p>
            <div style={{ width: '100%', display: 'flex' }}>
              <div style={{ width: '50%' }}>
                <FormControl variant="outlined" className="data__form__judging" size="small">
                  <InputLabel>Количество боковых судей:</InputLabel>
                  <Select
                    value={groupA.sideJudge}
                    onChange={e => this.сhangeGroupA(e.target.value, 'sideJudge')}
                    label="Количество боковых судей:"
                  >
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className="data__form__judging" size="small">
                  <InputLabel>Количество баллов:</InputLabel>
                  <Select
                    value={groupA.numberPoints}
                    onChange={e => this.сhangeGroupA(e.target.value, 'numberPoints')}
                    label="Количество баллов:"
                  >
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                  </Select>
                </FormControl>
                <FormControl component="fieldset" className="data__form__judging">
                  <FormControlLabel
                    value={groupA.gradingControl}
                    onChange={e => this.сhangeGroupA(!groupA.gradingControl, 'gradingControl')}
                    control={
                      <Checkbox color="primary" checked={groupA.gradingControl} />
                    }
                    label="Контроль разброса оценок"
                    // labelPlacement="Дублировать на все дисциплины"
                  />
                </FormControl>
              </div>
              <div style={{ width: '50%' }}>
                <FormControl variant="outlined" className="data__form__judging" size="small">
                  <InputLabel>Разрешенный разброс оценок:</InputLabel>
                  <Select
                    value={groupA.allowedScatter}
                    onChange={e => this.сhangeGroupA(e.target.value, 'allowedScatter')}
                    label="Разрешенный разброс оценок:"
                  >
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className="data__form__judging" size="small">
                  <InputLabel>Количество цыфр после запятой (судей):</InputLabel>
                  <Select
                    value={groupA.decimalPointJudges}
                    onChange={e => this.сhangeGroupA(e.target.value, 'decimalPointJudges')}
                    label="Количество цыфр после запятой (судей):"
                  >
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className="data__form__judging" size="small">
                  <InputLabel>Количество цыфр после запятой сред/арефм:</InputLabel>
                  <Select
                    value={groupA.decimalPointAverage}
                    onChange={e => this.сhangeGroupA(e.target.value, 'decimalPointAverage')}
                    label="Количество цыфр после запятой сред/арефм:"
                  >
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="radiusForm">
            <p style={{ margin: '16px 50px' }}>
              <b>Группа В</b>
            </p>
            <div style={{ width: '100%', display: 'flex' }}>
              <div style={{ width: '50%' }}>
                <FormControl variant="outlined" className="data__form__judging" size="small">
                  <InputLabel>Количество боковых судей:</InputLabel>
                  <Select
                    value={groupB.sideJudge}
                    onChange={e => this.сhangeGroupB(e.target.value, 'sideJudge')}
                    label="Количество боковых судей:"
                  >
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                  </Select>
                </FormControl>
                <FormControl component="fieldset" className="data__form__judging">
                  <FormControlLabel
                    value={groupB.seniorJudge}
                    onChange={e => this.сhangeGroupB(!groupB.seniorJudge, 'seniorJudge')}
                    control={
                      <Checkbox color="primary" checked={groupB.seniorJudge} />
                    }
                    label="Старший судья"
                  />
                </FormControl>
                <FormControl component="fieldset" className="data__form__judging">
                  <FormControlLabel
                    value={groupB.refereeJudge}
                    onChange={e => this.сhangeGroupB(!groupB.refereeJudge, 'refereeJudge')}
                    control={
                      <Checkbox color="primary" checked={groupB.refereeJudge} />
                    }
                    label="Судья регистратор (инспектор)"
                  />
                </FormControl>
                <FormControl component="fieldset" className="data__form__judging">
                  <FormControlLabel
                    value={groupB.gradingControl}
                    onChange={e => this.сhangeGroupB(!groupB.gradingControl, 'gradingControl')}
                    control={
                      <Checkbox color="primary" checked={groupB.gradingControl} />
                    }
                    label="Контроль разброса оценок"
                  />
                </FormControl>
              </div>
              <div style={{ width: '50%' }}>
                <FormControl variant="outlined" className="data__form__judging" size="small">
                  <InputLabel>Количество баллов:</InputLabel>
                  <Select
                    value={groupB.numberPoints}
                    onChange={e => this.сhangeGroupB(e.target.value, 'numberPoints')}
                    label="Количество баллов:"
                  >
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                  </Select>
                </FormControl>
                <FormControl component="fieldset" className="data__form__judging">
                  <FormControlLabel
                    value={groupB.rejectionAssessment}
                    onChange={e => this.сhangeGroupB(!groupB.rejectionAssessment, 'rejectionAssessment')}
                    control={
                      <Checkbox color="primary" checked={groupB.rejectionAssessment} />
                    }
                    label="Отброс высокой и низкой оценки"
                  />
                </FormControl>
                <FormControl variant="outlined" className="data__form__judging" size="small">
                  <InputLabel>Количество цыфр после запятой (судей):</InputLabel>
                  <Select
                    value={groupB.decimalPointJudges}
                    onChange={e => this.сhangeGroupB(e.target.value, 'decimalPointJudges')}
                    label="Количество цыфр после запятой (судей):"
                  >
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className="data__form__judging" size="small">
                  <InputLabel>Количество цыфр после запятой сред/арефм:</InputLabel>
                  <Select
                    value={groupB.decimalPointAverage}
                    onChange={e => this.сhangeGroupB(e.target.value, 'decimalPointAverage')}
                    label="Количество цыфр после запятой сред/арефм:"
                  >
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          {this.modernTaolu(discipline, groupC)}
        </div>
      );
    }
    if (discipline === 'Саньшоу') {
      return (
        <div className="radiusForm">
          <div>
            <p style={{ margin: '16px 50px' }}>
              <b>Судьи</b>
            </p>
            <FormControl variant="outlined" style={{ width: '50%' }} size="small">
              <InputLabel>Количество боковых судей:</InputLabel>
              <Select
                value={judgesSanshaw}
                onChange={e => this.сhangeAge(e.target.value)}
                label="Количество боковых судей:"
              >
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="5">5</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      );
    }
  };

  render() {
    // const { sideJudge, numberPoints, decimalPointJudges, decimalPointAverage } = this.state;
    const { discipline, section, judgesSanshaw, groupA, groupB, groupC } = this.props;
    // console.log(groupA);

    return (
      <div>
        {this.renderMain(discipline, section, judgesSanshaw, groupA, groupB, groupC)}
      </div>
    );
  }
}

JudgigMain.propTypes = {
  editJudgesSanshaw: PropTypes.func.isRequired,
  editGroupA: PropTypes.func.isRequired,
  editGroupB: PropTypes.func.isRequired,
  editGroupC: PropTypes.func.isRequired,
  discipline: PropTypes.node.isRequired,
  section: PropTypes.string.isRequired,
  judgesSanshaw: PropTypes.string.isRequired,
  groupA: PropTypes.object.isRequired,
  groupB: PropTypes.object.isRequired,
  groupC: PropTypes.object.isRequired,
};


export default connect(
  null,
  { }
)(JudgigMain);
