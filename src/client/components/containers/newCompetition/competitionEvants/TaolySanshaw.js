import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Modal from 'react-modal';

import { deleteWeapon } from '../../../../redux/actionsTaolyWeapon';

import AddEditWeapon from './AddEditWeapon';


import '../css/competitionEvents.css';

Modal.setAppElement('#root');
// eslint-disable-next-line react/prefer-stateless-function
class TaolySanshaw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      modalIsType: '',
      // option: '',
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = (type, weapon) => {
    if (weapon !== '' || type === 'new') {
      this.setState({
        modalIsOpen: true,
        modalIsType: type,
        // weapon: weapon
      });
    }
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'black';
  };

  closeModal(inputWeapon) {
    this.setState({
      modalIsOpen: false,
    });
    this.props.changeWeapon(inputWeapon);
  };

  deleteWeaponClick = (weapon) => {
    this.props.deleteWeapon(weapon);
    this.props.changeWeapon('');
  };

  editWeapon = (weapon) => {
    this.props.changeWeapon(weapon);
  };

  editOption = (option) => {
    this.props.changeOption(option);
    // this.setState({ option });
    this.props.changeWeapon('');
  };

  renderOptionButton = (typeDiscipline, option) => {
    if (typeDiscipline === 'Традиционное ушу') {
      return (
        <div className="option__button">
          <Button
            size="small"
            className="button__control__weapon"
            variant="outlined"
            color={option === 'Вариант 1' ? 'primary' : 'default'}
            component="label"
            onClick={() => this.editOption('Вариант 1')}
          >
            Вариант 1
          </Button>
          <Button
            size="small"
            className="button__control__weapon"
            variant="outlined"
            component="label"
            color={option === 'Вариант 2' ? 'primary' : 'default'}
            onClick={() => this.editOption('Вариант 2')}
          >
            Вариант 2
          </Button>
          <Button
            size="small"
            className="button__control__weapon"
            variant="outlined"
            component="label"
            color={option === 'Вариант 3' ? 'primary' : 'default'}
            onClick={() => this.editOption('Вариант 3')}
          >
            Вариант 3
          </Button>
          <Button
            size="small"
            className="button__control__weapon"
            variant="outlined"
            component="label"
            color={option === 'Вариант 4' ? 'primary' : 'default'}
            onClick={() => this.editOption('Вариант 4')}
          >
            Вариант 4
          </Button>
        </div>
      );
    }
  };

  renderName = (typeSection) => {
    if (typeSection === 'Саньшоу') {
      return (
        <span><b>{typeSection}</b></span>
      );
    }
  };

  render() {
    // const { option } = this.state;
    const { typeSection, typeDiscipline, weapon, option } = this.props;
    // console.log(option);

    return (
      <div style={{ height: 'calc(100vh - 144px' }}>
        <div className="control__form">
          {this.renderOptionButton(typeDiscipline, option)}
          <div className="block__weapon">
            <div>
              <FormControl component="fieldset">
                <RadioGroup aria-label="gender" value={weapon} onChange={e => this.editWeapon(e.target.value)}>
                  {
                    this.props.listWeapon.map((item, index) => {
                      // console.log(item.weapon, weapon);
                      if (typeDiscipline === item.type && item.type === 'Спортивное ушу') {
                        return (
                          <FormControlLabel
                            key={ index }
                            value={item.weapon}
                            control={<Radio color="primary" size="small" />}
                            label={item.weapon}
                          />
                        );
                      }
                      if (typeDiscipline === item.type && item.option === option) {
                        return (
                          <FormControlLabel
                            key={ index }
                            value={item.weapon}
                            control={<Radio color="primary" size="small" />}
                            label={item.weapon}
                          />
                        );
                      }
                      if (typeSection === item.section) {
                        return (
                          <FormControlLabel
                            key={ index }
                            value={item.weapon}
                            control={<Radio color="primary" size="small" />}
                            label={item.weapon}
                          />
                        );
                      }
                    })
                  }
                </RadioGroup>
              </FormControl>
            </div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={() => this.closeModal(weapon)}
            >
              <h2 ref={subtitle => this.subtitle = subtitle}> </h2>
              {this.state.modalIsType === 'new'
                // eslint-disable-next-line react/jsx-wrap-multilines
                ? <AddEditWeapon
                    typeSection={typeSection}
                    typeDiscipline={typeDiscipline}
                    typeOption={option} onClose={this.closeModal}
                    weaponChange={'addWeapon'}
                  />
                : <AddEditWeapon
                    typeSection={typeSection}
                    typeDiscipline={typeDiscipline}
                    typeOption={option} weapon={weapon}
                    onClose={this.closeModal}
                    weaponChange={'editWeapon'}
                  />
              }
              <Button
                size="small"
                className="button__control__weapon"
                variant="outlined"
                component="label"
                // onClick={this.closeModal}
                onClick={() => this.closeModal(weapon)}
              >
              cancel
              </Button>
            </Modal>
            <div className="form__control__weapon">
              <Button
                size="small"
                className="button__control__weapon"
                variant="outlined"
                component="label"
                onClick={() => this.openModal('new', weapon)}
              >
                Add
              </Button>
              <Button
                size="small"
                className="button__control__weapon"
                variant="outlined"
                component="label"
                onClick={() => this.openModal('edit', weapon)}
              >
                Edit
              </Button>
              <Button
                size="small"
                className="button__control__weapon"
                variant="outlined"
                component="label"
                onClick={() => this.deleteWeaponClick(weapon)}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
        <div className="info__block">
          <div>
            {this.renderName(typeSection)} 
          </div>
          <span><b>{typeDiscipline}</b></span>
          <span>{weapon}</span>
        </div>
        <div className="block__weapon" style={{  minHeight: '50px'}}>
          {
            this.props.listWeapon.map((item, index) => {
              if (item.weapon === weapon) {
                return (
                  <div key={ index }>
                    {item.data.map((itemData, index) => (
                      <div key={ index }>
                        <ul>
                          <li>{itemData.value}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                );
              }
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listWeapon: state.listWeapon,
});

export default connect(mapStateToProps, { deleteWeapon })(TaolySanshaw);
