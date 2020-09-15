import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './css/generalSetting.css';

const rows = [
  {
    type: 'select',
    title: '*Название соревнования:',
    key: 'name',
    data: [
      'Областное',
      'Местное',
      'Всеукраинское',
    ]
  },
  {
    type: 'select',
    title: '*Город/Село:',
    key: 'town',
    data: [
      'Киев',
      'Днепр',
    ]
  },
  {
    type: 'select',
    title: '*Область:',
    key: 'region',
    data: [
      'Киевская',
      'Днепропетровская',
    ]
  },
  {
    type: 'select',
    title: '*Страна:',
    key: 'country',
    data: [
      'Украина',
      'Польша',
    ]
  },
  { type: 'input', title: '*Место:', key: 'place' },
  { type: 'input', title: '*Адрес:', key: 'address' },
  { type: 'date', title: '*Дата начала соревнования:', key: 'dateStart' },
  { type: 'date', title: '*Дата окончания соревнования:', key: 'dateFinish' },
  { type: 'date', title: '*Дата предварительной заявки:', key: 'preliminaryApplication' },
  { type: 'date', title: '*Дата финальной зявки:', key: 'finalApplication' },
];

const rowsButton = [
  { title: 'Загрузить регламент/положение:', validation: 'notNecessary' },
  { title: 'Загрузить афишу:', validation: 'notNecessary' },
  { title: '*Загрузить логотип:', validation: 'required' },
  { title: '*Загрузить питание:', validation: 'required' },
  { title: '*Загрузить проживание:', validation: 'required' },
  { title: '*Загрузить транспорт:', validation: 'required' },
  { title: '*Загрузить расписание:', validation: 'required' },
];

const rowsTypeLevel = [
  {
    level: 'Чемпионат',
    title: '*Тип чемпионата:',
    key: 'typeLevel',
    data: [
      'Международный',
      'Континентальный',
      'Национальный',
      'Окружной',
      'Районный',
      'Городской',
      'Клубный'
    ]
  },
  {
    level: 'Кубок(Турнир)',
    title: '*Тип Кубока/Турнира:',
    key: 'typeLevel',
    data: [
      'Международный',
      'Национальный',
      'Областной',
      'Городской',
    ]
  },
];

const rowsTable = [
  { title: 'Количество спортсменов в виде (о/к)' },
  { title: 'Количество спортсменов в виде (о/к)' },
  { title: 'Количество спортсменов в в/к (о/к)' },
  { title: 'Количество тренеров (о/к)' },
  { title: 'Количество судей (о/к)' },
  { title: 'Количество зрителей (о/к)' },
  { title: 'Количество докторов (о/к)' },
  { title: 'Количество представителей команды' },
  { title: 'Количество видов в дисиплине', section: 'Саньшоу' },
  { title: 'Количество дисциплин' },
  { title: 'Количество судей от области' },
];

// eslint-disable-next-line react/prefer-stateless-function
class GeneralSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      town: '',
      region: '',
      country: '',
      place: '',
      address: '',
      dateStart: '',
      dateFinish: '',
      preliminaryApplication: '',
      finalApplication: '',
      level: '',
      typeLevel: '',
      status: '',
      section: '',
      discipline: '',
    };
  }

  hendelChangeSelect = (key, value) => {
    this.setState({ [key]: value });
  };

  editLevel = (level) => {
    this.setState({ typeLevel: '' });
    this.setState({ level });
  };

  editStatus = (status) => {
    this.setState({ status });
  };

  editSection = (section) => {
    this.setState({ 
      discipline: '',
      type: '',
      section
    });
  };

  editDiscipline = (discipline) => {
    this.setState({ discipline });
  };

  editType = (type) => {
    this.setState({ type });
  };

  renderDiscipline = (section, discipline) => {
    if (section === 'Таолу') {
      return (
        <FormControl variant="outlined" className="data__form" size="small">
          <InputLabel>*Дисциплина:</InputLabel>
          <Select
            value={discipline}
            onChange={e => this.editDiscipline(e.target.value)}
            label="*Дисциплина:"
          >
            <MenuItem value="Спортивное ушу">Спортивное ушу</MenuItem>
            <MenuItem value="Традиционное ушу">Традиционное ушу</MenuItem>
          </Select>
        </FormControl>
      );
    }
    if (section === 'Саньшоу') {
      return (
        <FormControl variant="outlined" className="data__form" size="small">
          <InputLabel>*Дисциплина:</InputLabel>
          <Select
            value={discipline}
            onChange={e => this.editDiscipline(e.target.value)}
            label="*Дисциплина:"
          >
            <MenuItem value="Санда">Санда</MenuItem>
            <MenuItem value="Цында">Цында</MenuItem>
            <MenuItem value="Туйшоу">Туйшоу</MenuItem>
            <MenuItem value="Винчун">Винчун</MenuItem>
          </Select>
        </FormControl>
      );
    }
  };

  renderTable = (section) => {
    if (section !== '') {
      return (
        <div>
          <TableContainer variant="outlined" className="blockQuantity" component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell> </TableCell>
                  <TableCell align="center">Всего</TableCell>
                  <TableCell align="center">М</TableCell>
                  <TableCell align="center">Ж</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsTable.map((item, index) => {
                  if (item.section !== section) {
                    return (
                      <TableRow key={ index }>
                        <TableCell className="nameCell" align="left">{item.title}</TableCell>
                        <TableCell align="center">
                          <TextField
                            size="small"
                            className="itemQuantity"
                            variant="outlined"
                            type="number"
                            defaultValue="0"
                            // onChange={e => this.editFinalApplication(e.target.value)}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <TextField
                            // style={{ height: '5px' }}
                            size="small"
                            className="itemQuantity"
                            variant="outlined"
                            type="number"
                            defaultValue="0"
                            // onChange={e => this.editFinalApplication(e.target.value)}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <TextField
                            size="small"
                            className="itemQuantity"
                            variant="outlined"
                            type="number"
                            defaultValue="0"
                            // onChange={e => this.editFinalApplication(e.target.value)}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  }
                },)
                }
              </TableBody>
            </Table>
          </TableContainer>
          <TextField
            size="small"
            className="data__form"
            variant="outlined"
            label="*Количество площадок:"
            type="number"
            defaultValue="0"
            // onChange={e => this.editFinalApplication(e.target.value)}
          />
        </div>
      );
    }
  }

  renderType = (section, type) => {
    if (section === 'Таолу') {
      return (
        <div>
          <FormControl variant="outlined" className="data__form" size="small">
            <InputLabel>Выступление по возросту/уровню:</InputLabel>
            <Select
              value={type}
              onChange={e => this.editType(e.target.value)}
              label="Выступление по возросту/уровню:"
            >
              <MenuItem value="По возрасту">По возрасту</MenuItem>
              <MenuItem value="По уровню">По уровню</MenuItem>
            </Select>
          </FormControl>
        </div>
      );
    }
  }

  render() {
    const {
      name,
      town,
      region,
      country,
      place,
      address,
      dateStart,
      dateFinish,
      preliminaryApplication,
      finalApplication,
      level,
      typeLevel,
      status,
      section,
      discipline,
      type
    } = this.state;

    console.log(
      name,
      town,
      region,
      country,
      place,
      address,
      dateStart,
      dateFinish,
      preliminaryApplication,
      finalApplication,
      level,
      typeLevel,
      status,
      section,
      discipline,
      type
    );

    return (
      <div className="main__list__data">
        <div className="list__data">
          {rows.map((item, index) => {
            if (item.type === 'select') {
              return (
                <FormControl variant="outlined" className="data__form" size="small" key={ index }>
                  <InputLabel>{item.title}</InputLabel>
                  <Select
                    value={ this.state[item.key] }
                    onChange={e => this.hendelChangeSelect(item.key, e.target.value)}
                    label={item.title}
                  >
                    {item.data.map((itemData, index) => (
                      <MenuItem value={itemData} key={ index }>{itemData}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              );
            }
            if (item.type === 'input') {
              return (
                <TextField
                  key={ index }
                  className="data__form"
                  label={item.title}
                  variant="outlined"
                  size="small"
                  onChange={e => this.hendelChangeSelect(item.key, e.target.value)}
                />
              );
            }
            if (item.type === 'date') {
              return (
                <TextField
                  key={ index }
                  size="small"
                  className="data__form, date__form"
                  variant="outlined"
                  label={item.title}
                  type="date"
                  defaultValue="2020-02-20"
                  onChange={e => this.hendelChangeSelect(item.key, e.target.value)}
                />
              );
            }
          },)
          }
          {rowsButton.map((item, index) => {
            return (
              <Button
                key={ index }
                size="small"
                className="data__form"
                variant="outlined"
                component="label"
                style={{ display: 'flex', justifyContent: 'start', margin: '5px' }}
              >
                {item.title}
              </Button>
            );
          },)
          }
          <TextField
            className="data__form"
            label="*Ссылка на канал трансляции:"
            variant="outlined"
            size="small"
            // onChange={e => this.hendelChangeSelect(item.key, e.target.value)}
          />
          <FormControl variant="outlined" className="data__form" size="small">
            <InputLabel>*Уровень соревнования:</InputLabel>
            <Select
              value={level}
              onChange={e => this.editLevel(e.target.value)}
              label="*Уровень соревнования:"
            >
              <MenuItem value="Чемпионат">Чемпионат</MenuItem>
              <MenuItem value="Кубок(Турнир)">Кубок(Турнир)</MenuItem>
            </Select>
          </FormControl>
          {rowsTypeLevel.map((item, index) => {
            if (item.level === level) {
              return (
                <FormControl variant="outlined" className="data__form" size="small" key={ index }>
                  <InputLabel>{item.title}</InputLabel>
                  <Select
                    value={ this.state[item.key] }
                    onChange={e => this.hendelChangeSelect(item.key, e.target.value)}
                    label={item.title}
                  >
                    {item.data.map((itemData, index) => (
                      <MenuItem value={itemData} key={ index }>{itemData}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              );
            }
          },)
          }
          <FormControl variant="outlined" className="data__form" size="small">
            <InputLabel>*Статус:</InputLabel>
            <Select
              value={status}
              onChange={e => this.editStatus(e.target.value)}
              label="*Статус:"
            >
              <MenuItem value="Открытый">Открытый</MenuItem>
              <MenuItem value="Закрытый">Закрытый</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className="data__form" size="small">
            <InputLabel>*Раздел:</InputLabel>
            <Select
              value={section}
              onChange={e => this.editSection(e.target.value)}
              label="*Раздел:"
            >
              <MenuItem value="Таолу">Таолу</MenuItem>
              <MenuItem value="Саньшоу">Саньшоу</MenuItem>
            </Select>
          </FormControl>
          {this.renderDiscipline(section, discipline)}
          {this.renderTable(section)}
          {this.renderType(section, type)}
        </div>
        <div className="button__events__setting">
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
)(GeneralSettings);
