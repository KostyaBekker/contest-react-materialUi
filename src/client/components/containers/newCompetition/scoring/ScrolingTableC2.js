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
class ScrolingTableC2 extends Component {
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
          if (item.version === 'Группа С (сложности и их соединение)' && item.group === 'Соединение') {
            return (
              <div key={ index }>
                <TableContainer variant="outlined" component={Paper}>
                  <Table aria-label="simple table">
                    <TableBody>
                      {item.data.map((point, index) => {
                        // console.log(point);
                        if (point.part === 'first') {
                          return (
                            <div key={ index }>
                              <TableRow>
                                <TableCell align="center">
                                  <div className="itemScrolingHead">
                                    Тэн кун фэй цзяо TKFJ
                                  </div>
                                </TableCell>
                                <TableCell align="center">
                                  <TextField
                                    size="small"
                                    className="itemScroling"
                                    label="+/-"
                                    variant="outlined"
                                    type="text"
                                    onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'nameWeapon', point, item)}
                                  />
                                </TableCell>
                                <TableCell align="center">
                                  <div className="itemScrolingHead">
                                    Цзопань ZP
                                  </div>
                                </TableCell>
                                <TableCell align="center">
                                  <TextField
                                    // style={{ height: '5px' }}
                                    size="small"
                                    className="itemScroling"
                                    label="+/-"
                                    variant="outlined"
                                    type="text"
                                    // value={item.cost}
                                    onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'code', point, item)}
                                  />
                                </TableCell>
                                <TableCell align="center">
                                  <TextField
                                    size="small"
                                    className="itemScroling"
                                    label="+/-"
                                    variant="outlined"
                                    type="text"
                                    // value={item.test}
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
                              <TableRow>
                                <TableCell align="center">
                                  <div className="itemScrolingHead">
                                    312A
                                  </div>
                                </TableCell>
                                <TableCell align="center">
                                  <TextField
                                    size="small"
                                    className="itemScroling"
                                    label="+/-"
                                    variant="outlined"
                                    type="text"
                                    onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'nameWeapon', point, item)}
                                  />
                                </TableCell>
                                <TableCell align="center">
                                  <div className="itemScrolingHead">
                                    06
                                  </div>
                                </TableCell>
                                <TableCell align="center">
                                  <TextField
                                    // style={{ height: '5px' }}
                                    size="small"
                                    className="itemScroling"
                                    label="+/-"
                                    variant="outlined"
                                    type="text"
                                    // value={item.cost}
                                    onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'code', point, item)}
                                  />
                                </TableCell>
                                <TableCell align="center">
                                  <TextField
                                    size="small"
                                    className="itemScroling"
                                    label="+/-"
                                    variant="outlined"
                                    type="text"
                                    // value={item.test}
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
                              <TableRow>
                                <TableCell align="center">
                                  <div className="itemScrolingHead">
                                    0,2
                                  </div>
                                </TableCell>
                                <TableCell align="center">
                                  <TextField
                                    size="small"
                                    className="itemScroling"
                                    label="+/-"
                                    variant="outlined"
                                    type="text"
                                    onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'nameWeapon', point, item)}
                                  />
                                </TableCell>
                                <TableCell align="center">
                                  <div className="itemScrolingHead">
                                    0,1
                                  </div>
                                </TableCell>
                                <TableCell align="center">
                                  <TextField
                                    // style={{ height: '5px' }}
                                    size="small"
                                    className="itemScroling"
                                    label="+/-"
                                    variant="outlined"
                                    type="text"
                                    // value={item.cost}
                                    onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'code', point, item)}
                                  />
                                </TableCell>
                                <TableCell align="center">
                                  <TextField
                                    size="small"
                                    className="itemScroling"
                                    label="+/-"
                                    variant="outlined"
                                    type="text"
                                    // value={item.test}
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
                            </div>
                          );
                        }
                      })
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              // <div>
              //   <TableContainer variant="outlined" component={Paper}  key={ index }>
              //     <Table aria-label="simple table">
              //   <TableBody>
              //     {item.data.map((point, index) => {
              //       // console.log(point);
              //       if (point.part === 'first') {
              //         return (
              //           <div key={ index }>
              //             <TableRow>
              //               <TableCell align="center">
              //                 <div className="itemScrolingHead">
              //                   Тэн кун фэй цзяо TKFJ
              //                 </div>
              //               </TableCell>
              //               <TableCell align="center">
              //                 <TextField
              //                   size="small"
              //                   className="itemScroling"
              //                   label="+/-"
              //                   variant="outlined"
              //                   type="text"
              //                   onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'nameWeapon', point, item)}
              //                 />
              //               </TableCell>
              //               <TableCell align="center">
              //                 <div className="itemScrolingHead">
              //                   Цзопань ZP
              //                 </div>
              //               </TableCell>
              //               <TableCell align="center">
              //                 <TextField
              //                   // style={{ height: '5px' }}
              //                   size="small"
              //                   className="itemScroling"
              //                   label="+/-"
              //                   variant="outlined"
              //                   type="text"
              //                   // value={item.cost}
              //                   onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'code', point, item)}
              //                 />
              //               </TableCell>
              //               <TableCell align="center">
              //                 <TextField
              //                   size="small"
              //                   className="itemScroling"
              //                   label="+/-"
              //                   variant="outlined"
              //                   type="text"
              //                   // value={item.test}
              //                   onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'code', point, item)}
              //                 />
              //               </TableCell>
              //               <TableCell align="center">
              //                 <TextField
              //                   size="small"
              //                   className="itemScroling"
              //                   label="Критерии снижения"
              //                   variant="outlined"
              //                   type="text"
              //                   // value={item.test}
              //                   onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'code', point, item)}
              //                 />
              //               </TableCell>
              //             </TableRow>
              //             <TableRow>
              //               <TableCell align="center">
              //                 <div className="itemScrolingHead">
              //                   312A
              //                 </div>
              //               </TableCell>
              //               <TableCell align="center">
              //                 <TextField
              //                   size="small"
              //                   className="itemScroling"
              //                   label="+/-"
              //                   variant="outlined"
              //                   type="text"
              //                   onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'nameWeapon', point, item)}
              //                 />
              //               </TableCell>
              //               <TableCell align="center">
              //                 <div className="itemScrolingHead">
              //                   06
              //                 </div>
              //               </TableCell>
              //               <TableCell align="center">
              //                 <TextField
              //                   // style={{ height: '5px' }}
              //                   size="small"
              //                   className="itemScroling"
              //                   label="+/-"
              //                   variant="outlined"
              //                   type="text"
              //                   // value={item.cost}
              //                   onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'code', point, item)}
              //                 />
              //               </TableCell>
              //               <TableCell align="center">
              //                 <TextField
              //                   size="small"
              //                   className="itemScroling"
              //                   label="+/-"
              //                   variant="outlined"
              //                   type="text"
              //                   // value={item.test}
              //                   onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'code', point, item)}
              //                 />
              //               </TableCell>
              //               <TableCell align="center">
              //                 <TextField
              //                   size="small"
              //                   className="itemScroling"
              //                   label="Критерии снижения"
              //                   variant="outlined"
              //                   type="text"
              //                   // value={item.test}
              //                   onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'code', point, item)}
              //                 />
              //               </TableCell>
              //             </TableRow>
              //             <TableRow>
              //               <TableCell align="center">
              //                 <div className="itemScrolingHead">
              //                   0,2
              //                 </div>
              //               </TableCell>
              //               <TableCell align="center">
              //                 <TextField
              //                   size="small"
              //                   className="itemScroling"
              //                   label="+/-"
              //                   variant="outlined"
              //                   type="text"
              //                   onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'nameWeapon', point, item)}
              //                 />
              //               </TableCell>
              //               <TableCell align="center">
              //                 <div className="itemScrolingHead">
              //                   0,1
              //                 </div>
              //               </TableCell>
              //               <TableCell align="center">
              //                 <TextField
              //                   // style={{ height: '5px' }}
              //                   size="small"
              //                   className="itemScroling"
              //                   label="+/-"
              //                   variant="outlined"
              //                   type="text"
              //                   // value={item.cost}
              //                   onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'code', point, item)}
              //                 />
              //               </TableCell>
              //               <TableCell align="center">
              //                 <TextField
              //                   size="small"
              //                   className="itemScroling"
              //                   label="+/-"
              //                   variant="outlined"
              //                   type="text"
              //                   // value={item.test}
              //                   onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'code', point, item)}
              //                 />
              //               </TableCell>
              //               <TableCell align="center">
              //                 <TextField
              //                   size="small"
              //                   className="itemScroling"
              //                   label="Критерии снижения"
              //                   variant="outlined"
              //                   type="text"
              //                   // value={item.test}
              //                   onChange={e => this.editAgeInfo(item.id, index, e.target.value, 'code', point, item)}
              //                 />
              //               </TableCell>
              //             </TableRow>
              //           </div>
              //         );
              //       }
              //     })
              //     }
              //   </TableBody>
              // </Table>
              //   </TableContainer>
              // </div>
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

export default connect(mapStateToProps, { editAgeInfo })(ScrolingTableC2);
