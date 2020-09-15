import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

// import { fontSize } from '@material-ui/system';

// eslint-disable-next-line react/prefer-stateless-function
class AdministrationTaolyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // editTypeAccess = (typeAccess) => {
  //   this.props.сhangeTypeAccess(typeAccess)
  // };

  render() {
    // const { group, groupData } = this.state;
    // const { typeAccess } = this.props;
    // console.log('grop:', group, 'groupData:', groupData, version);

    return (
      <div className="sanshawGroup" style={{ width: '50%' }}>
        <FormControl variant="outlined" className="data__form__judging" size="small">
          <InputLabel>ФИО</InputLabel>
          <Select
            // value={groupA.numberPoints}
            // onChange={e => this.сhangeGroupA(e.target.value, 'numberPoints')}
            label="ФИО"
          >
            <MenuItem value="Петров">Петров</MenuItem>
            <MenuItem value="Белоус">Белоус</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className="data__form__judging" size="small">
          <InputLabel>Должность/функции (выбрать из перечня)</InputLabel>
          <Select
            // value={groupA.numberPoints}
            // onChange={e => this.сhangeGroupA(e.target.value, 'numberPoints')}
            label="Должность/функции (выбрать из перечня)"
          >
            <MenuItem value="Тренер">Тренер</MenuItem>
            <MenuItem value="Наставник">Наставник</MenuItem>
          </Select>
        </FormControl>
        <div
          style={{
            border: '1px solid rgb(192, 192, 192)',
            borderRadius: '5px',
            margin: '5px',
            width: 'calc(100% - 24px)',
            fontSize: '16px',
            // height: '19px',
            paddingLeft: '14px'
          }}
        >
          <span>
            10
          </span>
        </div>
        <FormControl component="fieldset" className="data__form">
          <FormGroup>
            <FormControlLabel
              value="Использование пароля для вход"
              control={<Checkbox color="primary" size="small" />}
              label="Использование пароля для вход"
            />
          </FormGroup>
        </FormControl>
        <TextField
          className="data__form"
          label="Пароль"
          variant="outlined"
          size="small"
          // onChange={e => this.hendelChangeSelect(item.key, e.target.value)}
        />
        <TextField
          className="data__form"
          label="Пароль повтор"
          variant="outlined"
          size="small"
          // onChange={e => this.hendelChangeSelect(item.key, e.target.value)}
        />
        <div className="sanshawGroup">
          <ul>
            <li>
              Сидоров Андрей
            </li>
            <li>
              Петров Илья
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { }
)(AdministrationTaolyInfo);
