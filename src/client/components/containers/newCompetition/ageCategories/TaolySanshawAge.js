import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Modal from 'react-modal';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
// import FormLabel from '@material-ui/core/FormLabel';

import { deleteAge } from '../../../../redux/actionsAge';
import { addAge } from '../../../../redux/actionsAge';
import { editAge } from '../../../../redux/actionsAge';

import EditSelect from './EditSelect';

import '../css/ageCategories.css';


Modal.setAppElement('#root');
// eslint-disable-next-line react/prefer-stateless-function
class TaolyAge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeValue: '',
      valueAge: '',
      group: '',
      typeGroup: '',
      modalIsOpen: false,
      typeAgeSelect: ''
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = (typeAgeSelect) => {
    this.setState({
      modalIsOpen: true,
      typeAgeSelect
    });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'black';
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    });
    // this.props.changeWeapon(inputWeapon);
  };

  addAge = (discipline) => {
    const { addAge } = this.props;
    addAge(discipline);
    // this.props.addAge(discipline);
  };

  editType = (typeValue) => {
    this.setState({
      typeValue,
      valueAge: ''
    });
  };

  editGroup = (group) => {
    this.setState({
      typeGroup: 'Новая группа',
      group
    });
  };

  editTypeGroup = (typeGroup) => {
    this.setState({
      typeGroup,
      group: ''
    });
  };

  editTypeAge = (valueAge) => {
    this.setState({
      typeValue: 'По возрасту',
      valueAge
    });
  };

  renderName = (typeSection, typeDiscipline) => {
    if (typeSection === 'Саньшоу') {
      return (
        <span><b>{typeSection}</b></span>
      );
    }
    if (typeSection === 'Таолу') {
      return (
        <span><b>{typeDiscipline + ' таолу'}</b></span>
      );
    }
  };

  updateAgeData = (id, value, name, item, discipline) => {
    // console.log(id);
    item[name] = value;
    const { editAge } = this.props;
    editAge(id, item, discipline);
    // this.props.editAge(id, item, discipline);
  };

  deleteAge = (id, discipline) => {
    const { deleteAge } = this.props;
    deleteAge(id, discipline);
    // this.props.deleteAge(id, discipline);
  };

  renderSanshaw = (discipline, group, typeGroup) => {
    if (discipline === 'Саньшоу') {
      return (
        <div className="sanshawGroup">
          <FormControl component="fieldset" className="sanshawGroup">
            <RadioGroup aria-label="gender" value={typeGroup} onChange={e => this.editTypeGroup(e.target.value)} style={{ display: 'block' }} >
              <FormControlLabel
                value="Санда"
                control={<Radio color="primary" size="small" />}
                style={{ margin: '0px'}}
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
                  value="Новая группа"
                  control={<Radio color="primary" size="small" />}
                  style={{ margin: '0px' }}
                  // label="По возрасту (полных лет)"
                />
                <TextField
                  size="small"
                  // style={{ width: '100px' }}
                  variant="outlined"
                  // label="-"
                  type="text"
                  value={group}
                  onChange={e => this.editGroup(e.target.value)}
                />
              </div>
            </RadioGroup>
          </FormControl>
        </div>
      )
    }
  };

  rederSell = (discipline, item, listAgeInfo) => {
    if (discipline === 'Спортивное ушу' || discipline === 'Саньшоу') {
      return (
        <FormControl variant="outlined" className="data__form" size="small" >
          <Select
            value={item.ageSection}
            onChange={e => this.updateAgeData(item.id, e.target.value, 'ageSection', item, discipline)}
          >
            {listAgeInfo.map((itemInfo, index) => {
              if (itemInfo.type === 'ageSection' && itemInfo.discipline === discipline) {
                return (
                  <MenuItem
                    value={itemInfo.value}
                    key={ index }
                  >
                    {itemInfo.value}
                  </MenuItem>
                );
              }
            })
            }
          </Select>
        </FormControl>
      );
    }
  };

  renderButton = (discipline) => {
    if (discipline === 'Спортивное ушу' || discipline === 'Саньшоу') {
      return (
        <Button
          size="small"
          className="button__control__ageInfo"
          variant="outlined"
          component="label"
          onClick={() => this.openModal('ageSection')}
        >
          Edit age section
        </Button>
      );
    }
  };


  render() {
    const {
      typeValue,
      valueAge,
      group,
      typeGroup,
      typeAgeSelect
    } = this.state;
    const { typeSection, typeDiscipline, listAge, listAgeInfo } = this.props;
    // console.log(typeAgeSelect);

    return (
      <div style={{ height: 'calc(100vh - 144px' }}>
        <div className="info__block">
          <div>
            {this.renderName(typeSection, typeDiscipline)}
          </div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={() => this.closeModal()}
          >
            <h2 ref={subtitle => this.subtitle = subtitle}> </h2>
            <EditSelect
              typeAgeSelect={typeAgeSelect}
              typeDiscipline={typeDiscipline}
              closeModal={this.closeModal}
            />
            <Button
              size="small"
              className="button__control__weapon"
              variant="outlined"
              component="label"
              // onClick={this.closeModal}
              onClick={() => this.closeModal()}
            >
            cancel
            </Button>
          </Modal>
          <span>Разделение на возрастные группы</span>
        </div>
        <div>
          {listAge.map((point, index) => {
            // console.log(point.ageCategory);
            if (typeDiscipline === point.discipline) {
              return (
                <div key={ index }>
                  {this.renderSanshaw(point.discipline, group, typeGroup)}
                  <div>
                    <FormControl component="fieldset">
                      <RadioGroup aria-label="gender" value={typeValue} onChange={e => this.editType(e.target.value)}>
                        <div style={{ display: 'flex' }}>
                          <FormControlLabel
                            value="По возрасту"
                            control={<Radio color="primary" size="small" />}
                            style={{ margin: '0px' }}
                            // label="По возрасту (полных лет)"
                          />
                          <TextField
                            size="small"
                            style={{ width: '500px' }}
                            variant="outlined"
                            label="По возрасту (полных лет)"
                            type="number"
                            value={valueAge}
                            onChange={e => this.editTypeAge(e.target.value)}
                          />
                        </div>
                        <FormControlLabel
                          value="По дате рождения"
                          control={<Radio color="primary" size="small" />}
                          label="По дате рождения"
                          style={{ margin: '0px' }}
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div>
                    <TableContainer variant="outlined" className="blockAge" component={Paper}>
                      <Table aria-label="simple table">
                        <TableBody>
                          {point.data.map((item, index) => {
                            // console.log(item);
                            return (
                              <TableRow key={ index }>
                                <TableCell className="nameCell" align="left">
                                  <IconButton
                                    aria-label="delete"
                                    onClick={() => this.deleteAge(item.id, point.discipline)}
                                  >
                                    <DeleteIcon
                                      fontSize="small"
                                    />
                                  </IconButton>
                                </TableCell>
                                <TableCell className="nameCell" align="left">от</TableCell>
                                <TableCell align="center">
                                  <TextField
                                    size="small"
                                    className="itemAge"
                                    variant="outlined"
                                    type="number"
                                    value={item.from}
                                    onChange={e => this.updateAgeData(item.id, e.target.value, 'from', item, point.discipline)}
                                  />
                                </TableCell>
                                <TableCell className="nameCell" align="left">до</TableCell>
                                <TableCell align="center">
                                  <TextField
                                    // style={{ height: '5px' }}
                                    size="small"
                                    className="itemAge"
                                    variant="outlined"
                                    type="number"
                                    value={item.to}
                                    onChange={e => this.updateAgeData(item.id, e.target.value, 'to', item, point.discipline)}
                                  />
                                </TableCell>
                                <TableCell className="nameCell" align="left">лет</TableCell>
                                <TableCell align="center">
                                  <TextField
                                    size="small"
                                    className="itemDate"
                                    variant="outlined"
                                    type="date"
                                    value={item.ageFrom}
                                    onChange={e => this.updateAgeData(item.id, e.target.value, 'ageFrom', item, point.discipline)}
                                  />
                                </TableCell>
                                <TableCell align="center">
                                  <TextField
                                    size="small"
                                    className="itemDate"
                                    variant="outlined"
                                    type="date"
                                    value={item.ageTo}
                                    onChange={e => this.updateAgeData(item.id, e.target.value, 'ageTo', item, point.discipline)}
                                  />
                                </TableCell>
                                <TableCell align="center">
                                  <FormControl variant="outlined" className="data__form" size="small" key={ index }>
                                    <Select
                                      value={item.ageCategory}
                                      onChange={e => this.updateAgeData(item.id, e.target.value, 'ageCategory', item, point.discipline)}
                                    >
                                      {listAgeInfo.map((itemInfo, index) => {
                                        if (itemInfo.type === 'ageCategory') {
                                          return (
                                            <MenuItem
                                              value={itemInfo.value}
                                              key={ index }
                                            >
                                              {itemInfo.value}
                                            </MenuItem>
                                          );
                                        }
                                      })
                                      }
                                    </Select>
                                  </FormControl>
                                </TableCell>
                                <TableCell align="center">
                                  {this.rederSell(point.discipline, item, listAgeInfo)}
                                </TableCell>
                                <TableCell align="center">
                                  <FormControl variant="outlined" className="data__form" size="small">
                                    <Select
                                      value={item.genderCategory}
                                      onChange={e => this.updateAgeData(item.id, e.target.value, 'genderCategory', item, point.discipline)}
                                    >
                                      {listAgeInfo.map((itemInfo, index) => {
                                        if (itemInfo.type === 'genderCategory') {
                                          return (
                                            <MenuItem
                                              value={itemInfo.value}
                                              key={ index }
                                            >
                                              {itemInfo.value}
                                            </MenuItem>
                                          );
                                        }
                                      })
                                      }
                                    </Select>
                                  </FormControl>
                                </TableCell>
                              </TableRow>
                            );
                          },)
                          }
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                  <div className="form__control__weapon">
                    <Button
                      size="small"
                      className="button__control__ageInfo"
                      variant="outlined"
                      component="label"
                      onClick={() => this.addAge(point.discipline)}
                    >
                      Add
                    </Button>
                    <Button
                      size="small"
                      className="button__control__ageInfo"
                      variant="outlined"
                      component="label"
                      onClick={() => this.openModal('ageCategory')}
                    >
                      Edit age category
                    </Button>
                    {this.renderButton(point.discipline)}
                    <Button
                      size="small"
                      className="button__control__ageInfo"
                      variant="outlined"
                      component="label"
                      onClick={() => this.openModal('genderCategory')}
                    >
                      Edit gender category
                    </Button>
                    <FormControl component="fieldset">
                      <FormControlLabel
                        value="duplicate"
                        control={<Checkbox color="primary" />}
                        label="Дублировать на все дисциплины"
                        // labelPlacement="Дублировать на все дисциплины"
                      />
                    </FormControl>
                  </div>
                </div>
              );
            }
          },)
          }
        </div>
      </div>
    );
  }
}

TaolyAge.propTypes = {
  listAgeInfo: PropTypes.node.isRequired,
  listAge: PropTypes.node.isRequired,
  typeSection: PropTypes.string.isRequired,
  typeDiscipline: PropTypes.string.isRequired,
  addAge: PropTypes.func.isRequired,
  editAge: PropTypes.func.isRequired,
  deleteAge: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  listAge: state.listAge,
  listAgeInfo: state.listAgeInfo
});

export default connect(mapStateToProps, { addAge, deleteAge, editAge })(TaolyAge);
