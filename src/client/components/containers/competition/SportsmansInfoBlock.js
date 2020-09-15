import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import firebase from 'firebase';
import { connect } from 'react-firebase';

import './css/sportsmansInfoBlock.css';



firebase.initializeApp({
  databaseURL: 'https://referee-web.firebaseio.com/',
  apiKey: 'AIzaSyBqEZ1wV00q4sgacaLyH5BlFXLrJGxY7N0',
});

// eslint-disable-next-line react/prefer-stateless-function
class CompetitionInfoBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: '',
      // value: ''
    };
  }
  

  checkSportsman = (row, index) => {
    // console.log(rows[index]);
    this.props.sportsmanData(row);
    this.setState({ activeButton: index });
    // console.log(row);
  };

  render() {
    console.log(this.props);

    console.log(this.props.value);
    const { competition, sportsman } = this.props;
    const { activeButton } = this.state;
    // console.log('sportsman:', sportsman);
    // console.log(competition.sportsman);

    return (
      
      <div>
        <div className="header">
          { competition.name }
        </div>
        <div>
          <TableContainer component={Paper} style={{ width: '100%' }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">#</TableCell>
                  <TableCell align="center">ФИО</TableCell>
                  <TableCell align="center">Время</TableCell>
                  <TableCell align="center">Команда</TableCell>
                  <TableCell align="center">Оценка</TableCell>
                  <TableCell align="center">Место</TableCell>
                  <TableCell align="center">Примечание</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {competition.sportsman && competition.sportsman.map((row, index) => (
                  <TableRow
                    key={ index }
                    onClick={() => this.checkSportsman(row, index)}
                    className={(activeButton === index) && (sportsman.name) ? 'checkRow' : ''}
                    style={{ cursor: 'pointer' }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.team}</TableCell>
                    <TableCell align="center">{row.rating}</TableCell>
                    <TableCell align="center">{row.place}</TableCell>
                    <TableCell align="center">{row.note}</TableCell>
                    <TableCell align="center">{row.comment}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <button onClick={() => this.props.setValue(this.props.value - 1)}>-</button>
          <span>{this.props.value}</span>
        <button onClick={() => this.props.setValue(this.props.value + 1)}>+</button>
      </div>
    );
  }
}

CompetitionInfoBlock.defaultProps = {
  competition: {},
} ;

CompetitionInfoBlock.propTypes = {
  // index: PropTypes.number,
  competition: PropTypes.shape({ 
    name: PropTypes.string,
    time: PropTypes.string,
    sportsman: PropTypes.array,
  })
  // style: PropTypes.object,
  // children: PropTypes.node.isRequired,
  // dispatch: PropTypes.func.isRequired,
  // match: PropTypes.object.isRequired,
};

export default connect((props, ref) => ({
  value: 'counterValue',
  propsRef: props,
  setValue: value => ref('counterValue').set(value)
}))(CompetitionInfoBlock);

// export default connect(
//   null,
//   { }
// )(CompetitionInfoBlock);
