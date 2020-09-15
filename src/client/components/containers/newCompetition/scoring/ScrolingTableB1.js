import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
// import FormLabel from '@material-ui/core/FormLabel';

import { editAgeInfo } from '../../../../redux/actionsListScrolingTable';

import '../css/scroling.css';

// eslint-disable-next-line react/prefer-stateless-function
class ScrolingTableB1 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  editAgeInfo = (id, value, index, item) => {
    // console.log(item);
    item.data[index] = value;
    // console.log(item);
    this.props.editAgeInfo(id, item);
  };

  render() {
    // console.log(typeAgeSelect);
    const { tableData } = this.props;
    return (
      <div>
        {tableData.map((item, index) => {
          // console.log(item);
          if (item.version === 'Группа В (Общее впечатление)' && item.group === 'ОТЭ (основные технические элементы)') {
            return (
              <div key={ index } style={{  display: 'flex', flexWrap: 'wrap' }}>
                {item.data.map((point, index) => {
                  // console.log(point);
                  return (
                    <div key={ index }>
                      <TextField
                        className="itemScroling"
                        // label="Цюань"
                        variant="outlined"
                        defaultValue={point}
                        size="small"
                        // value={item.nameType}
                        onChange={e => this.editAgeInfo(item.id, e.target.value, index, item)}
                      />
                    </div>
                  );
                })
                }
              </div>
            );
          }
        })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tableData: state.listScrolingTable
});

export default connect(mapStateToProps, { editAgeInfo })(ScrolingTableB1);
