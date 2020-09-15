import React, { Component } from 'react';
import { connect } from 'react-redux';


import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
// import FormLabel from '@material-ui/core/FormLabel';

import { editAgeInfo } from '../../../../redux/actionsListScrolingTable';

import '../css/scroling.css';

// eslint-disable-next-line react/prefer-stateless-function
class ScrolingTableA extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  editAgeInfo = (id, index, value, type, point, item) => {
    // console.log(id, value, type, point, item);
    point[type] = value;
    // console.log(point);
    item.data[index] = point;
    // console.log(item);
    this.props.editAgeInfo(id, item);
  };

  render() {
    // console.log(typeAgeSelect);
    const { tableData } = this.props;
    return (
      <div>
        {tableData.map((item, index) => {
          if (item.version === 'Группа А (Техника)') {
            return (
              <TableContainer variant="outlined" component={Paper}  key={ index }>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">
                        <div className="itemScrolingHead">
                          цюань
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        <div className="itemScrolingHead">
                          кулак
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        <div className="itemScrolingHead">
                          01
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        <div className="itemScrolingHead">
                          0,1
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        <div className="itemScrolingHead">
                          Критерии снижения
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {item.data.map((point, index) => {
                      // console.log(point);
                      return (
                        <TableRow key={ index }>
                          <TableCell align="center">
                            <TextField
                              className="itemScroling"
                              label="Название т/э"
                              variant="outlined"
                              size="small"
                              onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'nameTypeode', point, item)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <TextField
                              size="small"
                              className="itemScroling"
                              label="Название т/э"
                              variant="outlined"
                              type="text"
                              onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'nameWeapon', point, item)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <TextField
                              // style={{ height: '5px' }}
                              size="small"
                              className="itemScroling"
                              label="код"
                              variant="outlined"
                              type="number"
                              onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'code', point, item)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <TextField
                              // style={{ height: '5px' }}
                              size="small"
                              className="itemScroling"
                              label="стоимост"
                              variant="outlined"
                              type="number"
                              // value={item.cost}
                              onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'code', point, item)}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <TextField
                              size="small"
                              className="itemScroling"
                              label="Критерии снижения"
                              variant="outlined"
                              type="text"
                              // value={item.test}
                              onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'code', point, item)}
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            );
          }
        },)
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tableData: state.listScrolingTable
});

export default connect(mapStateToProps, { editAgeInfo })(ScrolingTableA);
