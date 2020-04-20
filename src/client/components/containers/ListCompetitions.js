import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';

import '../../listCompetitions.css';

const mainRow = [
  {
    name: 'Областное соревнование',
    time: '19:09:2020',
  },
  {
    name: 'Городское соревнование',
    time: '05:10:2020',
  },
];

// eslint-disable-next-line react/prefer-stateless-function
class ListCompetitions extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  openCompetition = () => {
    document.querySelector('.linkMain').click();
  };

  newCompetition = () => {
    document.querySelector('.linkCreateCompetition').click();
  };

  editCompetition = (e) => {
    e.stopPropagation();
    console.log('edit');
  };

  deleteCompetition = (e) => {
    e.stopPropagation();
    console.log('delete');
  };

  render() {
    return (
      <div className="form__wrap">
        <div>
          <h2>Соревнования:</h2>
          <TableContainer component={Paper} style={{ maxWidth: '800px' }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">#</TableCell>
                  <TableCell align="center">Название:</TableCell>
                  <TableCell align="center">Дата:</TableCell>
                  <TableCell align="center">Дeйствия:</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mainRow.map((row, index) => (
                  <TableRow
                    key={ index }
                    style={{ cursor: 'pointer' }}
                    onClick={() => this.openCompetition()}
                    hover
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell
                      align="center"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="center"
                    >
                      {row.time}
                    </TableCell>
                    <TableCell>
                      <div>
                        <Button
                          variant="outlined"
                          size="small" 
                          onClick={(e) => this.editCompetition(e)}
                          style={{ width: '132px', fontSize: '11px' }}
                        >
                          Редактировать
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={(e) => this.deleteCompetition(e)}
                          style={{ width: '132px', fontSize: '11px' }}
                        >
                          Удалить
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button variant="outlined" size="small" onClick={() => this.newCompetition()} style={{ fontSize: '12px' }}>
            Создать новое соревнование
          </Button>
          <Link className="linkMain" to="/main" />
          <Link className="linkCreateCompetition" to="/general_settings" />
        </div>
      </div>
    );
  }
}


export default connect(
  null,
  { }
)(ListCompetitions);
