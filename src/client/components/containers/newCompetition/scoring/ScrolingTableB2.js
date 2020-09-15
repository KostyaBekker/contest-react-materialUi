import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { editAgeInfo } from '../../../../redux/actionsListScrolingTable';

import '../css/scroling.css';

// eslint-disable-next-line react/prefer-stateless-function
class ScrolingTableB2 extends Component {
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
          if (item.version === 'Группа В (Общее впечатление)' && item.group === 'Ошибки') {
            return (
              <TableContainer variant="outlined" component={Paper}  key={ index }>
                <Table aria-label="simple table">
                  <TableBody>
                    {item.data.map((point, index) => {
                      // console.log(point);
                      return (
                        <TableRow key={ index }>
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

export default connect(mapStateToProps, { editAgeInfo })(ScrolingTableB2);
