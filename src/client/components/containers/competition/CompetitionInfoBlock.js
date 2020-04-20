import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';

import './css/competition.css';


const mainRow = [
  {
    carpet1: [
      {
        name: 'Нань цюань Женьщины 18+',
        time: '9:00',
        sportsman: [
          {
            name: 'Петров Иван',
            team: 'г.Киев',
            rating: '8.32',
            place: '2',
            note: '',
            comment: '',
            date: '25.08.1993',
            obl: 'Dnipropetrovska',
            town: 'Dnipro',
            category: '1',
            club: 'NNN', 
            trainer: 'Сидоров Андрей',
          },
          { name: ' Иван', team: 'г.Киев', rating: '8.32', place: '2', note: '', comment: '' },
        ]
      },
      { 
        name: 'Чань цюань Мужчины 18+',
        time: '8:30',
        sportsman: [
          {
            name: 'Тура Дмитрий',
            team: 'г.Днепр',
            rating: '4.33',
            place: '2',
            note: '',
            comment: '',
            date: '25.08.1993',
            obl: 'Lvivska',
            town: 'Lviv',
            category: '2',
            club: 'MMM',
            trainer: 'Сидоров Андрей',
          },
          { name: 'Петров Иван', team: 'г.Днепр', rating: '8.32', place: '2', note: '', comment: '' },
        ]
      },
      { name: 'Чань цюань Женьщины 18+', time: '10:45' },
    ]
  },
  {
    carpet2: [
      { name: 'Нань цюань Женьщины 18+', time: '10:20' },
      { name: 'Чань цюань Женьщины 18+', time: '12:55' },
      { name: 'Чань цюань Мужчины 18+', time: '14:10' },
    ]
  },
  {
    carpet3: [
      { name: 'Нань цюань Женьщины 18+', time: '10:20' },
      { name: 'Чань цюань Женьщины 18+', time: '12:55' },
      { name: 'Чань цюань Мужчины 18+', time: '14:10' },
    ]
  },
  {
    carpet4: [
      { name: 'Нань цюань женьщины 18+', time: '10:20' },
      { name: 'Чань цюань женьщины 18+', time: '12:55' },
      { name: 'Чань цюань Мужчины 18+', time: '14:10' },
    ]
  }
];
let rows = [];


// eslint-disable-next-line react/prefer-stateless-function
class CompetitionInfoBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'timetable',
      typeCarpets: '',
      activeButton: ''
    };
  }

  updateTypeCarpets = (typeCarpets) => {
    this.setState({ typeCarpets });
    this.setState({ activeButton: '' });
    this.props.competitionData({});
    rows = [];
    if (typeCarpets === 1) {
      rows = mainRow[0].carpet1;
    }
    if (typeCarpets === 2) {
      rows = mainRow[1].carpet2;
    }
    if (typeCarpets === 3) {
      rows = mainRow[2].carpet3;
    }
    if (typeCarpets === 4) {
      rows = mainRow[3].carpet4;
    }
  };

  checkCompetition = (rows, index) => {
    this.props.competitionData(rows[index]);
    this.setState({ activeButton: index });
  };

  carpetsData = (typeCarpets, activeButton) => {

    return (
      <div>
        <TableContainer component={Paper} style={{ maxWidth: '266px' }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">#</TableCell>
                <TableCell align="center">Вид</TableCell>
                <TableCell align="center">Время</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={ index }
                  onClick={() => this.checkCompetition(rows, index)}
                  className={activeButton === index ? 'checkRow' : ''}
                  style={{ cursor: 'pointer' }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

  updateType = (type) => {
    this.setState({ type });
  };

  renderType = (type, typeCarpets, activeButton) => {
    if (type === 'events') {
      return (
        <div className="carpets_block">
          events
        </div>
      );
    }
    if (type === 'timetable') {
      return (
        <div>
          <div className="carpets_block">
            {mainRow.map((row, index) => (
              <Button
                key={ index }
                size="small"
                style={{ width: '132px', fontSize: '12px' }}
                variant="outlined"
                color={typeCarpets === (index+1) ? 'default' : 'primary'}
                onClick={() => this.updateTypeCarpets( (index+1)) }
              >
                Ковер №{ index+ 1}
              </Button>
            ))}
          </div>
          <div>
            {this.carpetsData(typeCarpets, activeButton)}
          </div>
        </div>
      );
    }
    if (type === 'age') {
      return (
        <div>
          age
        </div>
      );
    }
  }

  render() {
    // console.log(this.state.typeCarpets);
    const { type, typeCarpets, activeButton } = this.state;
    return (
      <div>
        <div>
          <Button
            style={{ fontSize: '12px' }}
            size="small"
            variant="contained"
            color={type === 'timetable' ? 'default' : 'primary'}
            onClick={() => this.updateType('timetable')}
          >
            Расписание
          </Button>
          <Button
            style={{ fontSize: '12px' }}
            size="small"
            variant="contained"
            color={type === 'events' ? 'default' : 'primary'}
            onClick={() => this.updateType('events')}
          >
            Потоки
          </Button>
          <Button
            style={{ fontSize: '12px' }}  
            size="small"
            variant="contained"
            color={type === 'age' ? 'default' : 'primary'}
            onClick={() => this.updateType('age')}
          >
            Возраст
          </Button>
        </div>
        {this.renderType(type, typeCarpets, activeButton)}
      </div>
    );
  }
}

export default connect(
  null,
  { }
)(CompetitionInfoBlock);
