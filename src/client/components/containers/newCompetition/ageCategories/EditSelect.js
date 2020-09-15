import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { deleteAgeInfo } from '../../../../redux/actionsAgeInfo';
import { addAgeInfo } from '../../../../redux/actionsAgeInfo';
import { editAgeInfo } from '../../../../redux/actionsAgeInfo';

// import '../../../app.css';
// const row = [];
// eslint-disable-next-line react/prefer-stateless-function
class EditSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  addAgeInfo = (discipline, typeAgeSelect) => {
    console.log(discipline, typeAgeSelect);
    const { addAgeInfo } = this.props;
    addAgeInfo(discipline, typeAgeSelect);
    // this.props.addAgeInfo(discipline, typeAgeSelect);
  };

  updateAgeInfo = (id, value) => {
    // eslint-disable-next-line no-lone-blocks
    const { editAgeInfo } = this.props;
    editAgeInfo(id, value);
    // this.props.editAgeInfo(id, value);
  };

  deleteAgeInfo = (id) => {
    // eslint-disable-next-line no-lone-blocks
    const { deleteAgeInfo } = this.props;
    deleteAgeInfo(id);
    // this.props.deleteAgeInfo(id);
  };

  render() {
    // const {

    // } = this.state;
    const {
      listAgeInfo,
      typeAgeSelect,
      typeDiscipline,
      closeModal
    } = this.props;
    // console.log(listAgeInfo, typeAgeSelect);
    return (
      <div>
        <div>
          {
            listAgeInfo.map((item, index) => {
              // console.log(item.value);
              if (typeAgeSelect === item.type && 'ageSection' === item.type && typeDiscipline === item.discipline) {
                console.log(typeAgeSelect, item.type);
                return (
                  <div key={ index }>
                    <TextField
                      className="data__form"
                      style={{ width: '50%' }}
                      label="Тип"
                      variant="outlined"
                      size="small"
                      value={item.value}
                      onChange={e => this.updateAgeInfo(item.id, e.target.value)}
                    />
                    <Button
                      size="small"
                      className="button__control__weapon"
                      variant="outlined"
                      component="label"
                      onClick={() => this.deleteAgeInfo(item.id)}
                    >
                    delete
                    </Button>
                  </div>
                );
              }
              if (typeAgeSelect === item.type && 'ageSection' != item.type) {
                return (
                  <div key={ index }>
                    <TextField
                      className="data__form"
                      style={{ width: '50%' }}
                      label="Тип"
                      variant="outlined"
                      size="small"
                      value={item.value}
                      onChange={e => this.updateAgeInfo(item.id, e.target.value)}
                    />
                    <Button
                      size="small"
                      className="button__control__weapon"
                      variant="outlined"
                      component="label"
                      onClick={() => this.deleteAgeInfo(item.id)}
                    >
                    delete
                    </Button>
                  </div>
                );
              }
              
            })
          }
        </div>
        <div>
          <Button
            size="small"
            // className="button__control__weapon"
            style={{ margin: '5px' }}
            variant="outlined"
            component="label"
            onClick={() => this.addAgeInfo(typeDiscipline, typeAgeSelect)}
          >
            Добавить тип
          </Button>
          <Button
            size="small"
            className="button__control__weapon"
            variant="outlined"
            component="label"
            onClick={() => closeModal()}
          >
            edit
          </Button>
        </div>
      </div>
    );
  }
}

EditSelect.propTypes = {
  addAgeInfo: PropTypes.func.isRequired,
  editAgeInfo: PropTypes.func.isRequired,
  deleteAgeInfo: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  listAgeInfo: PropTypes.node.isRequired,
  typeAgeSelect: PropTypes.string.isRequired,
  typeDiscipline: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  listAgeInfo: state.listAgeInfo
});

export default connect(mapStateToProps, { addAgeInfo, deleteAgeInfo, editAgeInfo })(EditSelect);
