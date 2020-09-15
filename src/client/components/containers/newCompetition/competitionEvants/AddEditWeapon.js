import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { addWeapon } from '../../../../redux/actionsTaolyWeapon';
import { editWeapon } from '../../../../redux/actionsTaolyWeapon';

// import '../../../app.css';
// const row = [];
// eslint-disable-next-line react/prefer-stateless-function
class AddEditWeapon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // row: [],
      inputWeapon: '',
      inputWeaponType: [],
      valueId: ''
    };
  }

  componentDidMount = () => {
    if (this.props.weaponChange === 'editWeapon') {
      // eslint-disable-next-line no-lone-blocks
      {
        this.props.listWeapon.map((item, index) => {
          if (item.weapon === this.props.weapon) {
            // console.log(item.data, this.state.inputWeaponType);
            return (
              this.setState({
                inputWeapon: item.weapon,
                inputWeaponType: item.data,
                valueId: item.valueId
              })
            );
          }
        })
      }
    }
  }

  typePageName = () => {
    if (this.props.weaponChange == 'editWeapon') {
      return (<h2><b>Edit Weapon</b></h2>);
    }
    return (<h2><b>Add Weapon</b></h2>);
  }

  updateWeapon = (inputWeapon) => {
    this.setState({ inputWeapon });
  };

  addWeaponType = (inputWeaponType) => {
    const createRid = () => {
      const min = 1;
      const max = 100000;
      const time = new Date().getTime();
      const random = Math.random() * (max - min) + min;
      return `${time}_${random}`;
    };
    inputWeaponType.push({ id: createRid(), value: '' });
    this.setState({ inputWeaponType });
  };

  updateWeaponType = (id1, value1, inputWeaponType) => {
    // eslint-disable-next-line no-lone-blocks
    inputWeaponType.map((item, index) => {
      if (item.id === id1) {
        item.value = value1;
        this.setState({ inputWeaponType });
      }
    })
  };

  deleteWeaponType = (id1, inputWeaponType) => {
    // eslint-disable-next-line no-lone-blocks
    inputWeaponType.forEach((element, index) => {
      if (element.id === id1) {
        inputWeaponType.splice(index, 1);
        this.setState({ inputWeaponType });
      }
    });
  };

  addWeapon = (inputWeapon, inputWeaponType, typeDiscipline, typeOption, typeSection) => {
    // eslint-disable-next-line no-lone-blocks
    this.props.addWeapon(inputWeapon, inputWeaponType, typeDiscipline, typeOption, typeSection);
    this.props.onClose(inputWeapon);
  };

  editWeapon = (inputWeapon, inputWeaponType, valueId, typeDiscipline, typeOption,typeSection) => {
    this.props.editWeapon(inputWeapon, inputWeaponType, valueId, typeDiscipline, typeOption, typeSection);
    this.props.onClose(inputWeapon);
  };

  typeButton = (inputWeapon, inputWeaponType, valueId, typeDiscipline, typeOption, typeSection) => {
    if (this.props.weaponChange === 'editWeapon') {
      return (
        <Button
          size="small"
          className="button__control__weapon"
          variant="outlined"
          component="label"
          onClick={() => this.editWeapon(
            inputWeapon,
            inputWeaponType,
            valueId,
            typeDiscipline,
            typeOption,
            typeSection
          )}
        >
        edit
        </Button>
      );
    }
    return (
      <Button
        size="small"
        className="button__control__weapon"
        variant="outlined"
        component="label"
        onClick={() => this.addWeapon(inputWeapon, inputWeaponType, typeDiscipline, typeOption, typeSection)}
      >
      add to list
      </Button>
    );
  }

  render() {
    const {
      inputWeapon,
      inputWeaponType,
      valueId
    } = this.state;
    const {
      typeDiscipline,
      typeSection,
      typeOption
    } = this.props;
    return (
      <div>
        {
          this.typePageName()
        }
        <TextField
          className="data__form"
          label="Оружие"
          variant="outlined"
          size="small"
          value={inputWeapon}
          onChange={e => this.updateWeapon(e.target.value)}
        />
        <div>
          {
            inputWeaponType.map((item, index) => {
              // console.log(item.value);
              return (
                <div key={ index }>
                  <TextField
                    className="data__form"
                    style={{ width: '50%' }}
                    label="Тип оружия"
                    variant="outlined"
                    size="small"
                    value={item.value}
                    onChange={e => this.updateWeaponType(item.id, e.target.value, inputWeaponType)}
                  />
                  <Button
                    size="small"
                    className="button__control__weapon"
                    variant="outlined"
                    component="label"
                    onClick={() => this.deleteWeaponType(item.id, inputWeaponType)}
                  >
                  delete
                  </Button>
                </div>
              );
            })
          }
        </div>
        <Button
          size="small"
          // className="button__control__weapon"
          style={{ margin: '5px' }}
          variant="outlined"
          component="label"
          onClick={() => this.addWeaponType(inputWeaponType)}
        >
        Добавить тип оружия
        </Button>
        {
          this.typeButton(
            inputWeapon,
            inputWeaponType,
            valueId, typeDiscipline,
            typeOption,
            typeSection
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listWeapon: state.listWeapon,
});


export default connect(
  mapStateToProps,
  { addWeapon, editWeapon }
)(AddEditWeapon);
