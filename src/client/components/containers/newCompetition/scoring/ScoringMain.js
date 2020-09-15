import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import ScrolingTableA from './ScrolingTableA';
import ScrolingTableB1 from './ScrolingTableB1';
import ScrolingTableB2 from './ScrolingTableB2';
import ScrolingTableС1 from './ScrolingTableС1';
import ScrolingTableC2 from './ScrolingTableC2';

// import '../css/judging.css';

const tables = [
  {
    section: 'Таолу',
    discipline: 'Спортивное ушу',
    typeGrouop: 'Группа А (Техника)',
    group: [
      { value: 'Группа Чан (чанцюань, цзяньшу, даошу, цяншу, гуньшу)' },
      { value: 'Группа Нань (наньцюань, наньдао, наньгунь)' },
      { value: 'Группа тайцзи (тайцзицюань, тайцзицзянь, тайцзифан)' },
      { value: 'Дуйлянь' },
      { value: 'Цзитисянму' },
      { value: 'Прочие ошибки' },
    ],
    groupData: [
      { name: 'Группа Чан (чанцюань, цзяньшу, даошу, цяншу, гуньшу)', value: 'Форма рук' },
      { name: 'Группа Чан (чанцюань, цзяньшу, даошу, цяншу, гуньшу)', value: 'Равновесие' },
      { name: 'Группа Чан (чанцюань, цзяньшу, даошу, цяншу, гуньшу)', value: 'Прыжки' },
      { name: 'Группа Чан (чанцюань, цзяньшу, даошу, цяншу, гуньшу)', value: 'Позиции' },
      { name: 'Группа Чан (чанцюань, цзяньшу, даошу, цяншу, гуньшу)', value: 'Техника оружия' },
      { name: 'Группа Чан (чанцюань, цзяньшу, даошу, цяншу, гуньшу)', value: 'Прочее' },

      { name: 'Группа Нань (наньцюань, наньдао, наньгунь)', value: 'Форма рук' },
      { name: 'Группа Нань (наньцюань, наньдао, наньгунь)', value: 'Акробатика' },
      { name: 'Группа Нань (наньцюань, наньдао, наньгунь)', value: 'Прыжки' },
      { name: 'Группа Нань (наньцюань, наньдао, наньгунь)', value: 'Позиции' },
      { name: 'Группа Нань (наньцюань, наньдао, наньгунь)', value: 'Техника оружия' },

      { name: 'Группа тайцзи (тайцзицюань, тайцзицзянь, тайцзифан)', value: 'Форма рук' },
      { name: 'Группа тайцзи (тайцзицюань, тайцзицзянь, тайцзифан)', value: 'Руки' },
      { name: 'Группа тайцзи (тайцзицюань, тайцзицзянь, тайцзифан)', value: 'Прыжки' },
      { name: 'Группа тайцзи (тайцзицюань, тайцзицзянь, тайцзифан)', value: 'Позиции' },
      { name: 'Группа тайцзи (тайцзицюань, тайцзицзянь, тайцзифан)', value: 'Техника оружия' },

      { name: 'Дуйлянь', value: 'Взаимодействие' },
      { name: 'Дуйлянь', value: '-' },

      { name: 'Цзитисянму', value: 'Взаимодействие' },
      { name: 'Цзитисянму', value: 'Технические ошибки' },

      { name: 'Прочие ошибки', value: 'Ошибки' },
    ]
  },
  {
    section: 'Таолу',
    discipline: 'Спортивное ушу',
    typeGrouop: 'Группа В (Общее впечатление)',
    group: [
      { value: 'ОТЭ (основные технические элементы)' },
      { value: 'Ошибки' },
    ],
    groupData: [
      { name: 'ОТЭ (основные технические элементы)', value: 'Чанцюань' },
      { name: 'ОТЭ (основные технические элементы)', value: 'Цзяньшу' },
      { name: 'ОТЭ (основные технические элементы)', value: 'Даошу' },
      { name: 'ОТЭ (основные технические элементы)', value: 'Цяншу' },
      { name: 'ОТЭ (основные технические элементы)', value: 'Гуньшу' },
      { name: 'ОТЭ (основные технические элементы)', value: 'Наньцюань' },
      { name: 'ОТЭ (основные технические элементы)', value: 'Наньдао' },
      { name: 'ОТЭ (основные технические элементы)', value: 'Наньгунь' },
      { name: 'ОТЭ (основные технические элементы)', value: 'Тайцзицюань' },
      { name: 'ОТЭ (основные технические элементы)', value: 'Тайцзицзянь' },
      { name: 'ОТЭ (основные технические элементы)', value: 'Тайцзифан' },
      { name: 'ОТЭ (основные технические элементы)', value: 'Ошибки' },

      { name: 'Ошибки', value: 'Ошибки' },
    ]
  },
  {
    section: 'Таолу',
    discipline: 'Спортивное ушу',
    typeGrouop: 'Группа С (сложности и их соединение)',
    group: [
      { value: 'Элементы' },
      { value: 'Соединение' },
    ],
    groupData: [
      { name: 'Элементы', value: 'Чан (чанцюань, цзяньшу, даошу, цяншу, гуньшу)' },
      { name: 'Элементы', value: 'Нань (наньцюань, наньдао, наньгунь)' },
      { name: 'Элементы', value: 'Тайцзи (тайцзицюань, тайцзицзянь, тайцзифан)' },

      { name: 'Соединение', value: 'Чан (чанцюань, цзяньшу, даошу, цяншу, гуньшу)' },
      { name: 'Соединение', value: 'Нань (наньцюань, наньдао, наньгунь)' },
      { name: 'Соединение', value: 'Тайцзи (тайцзицюань, тайцзицзянь, тайцзифан)' },
    ]
  }
];

// eslint-disable-next-line react/prefer-stateless-function
class ScoringMain extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  сhangeGroup = (group) => {
    const { сhangeGroup } = this.props;
    сhangeGroup(group);
    // this.props.сhangeGroup(group)
  };

  сhangeGroupData = (groupData) => {
    const { сhangeGroupData } = this.props;
    сhangeGroupData(groupData);
    // this.props.сhangeGroupData(groupData)
  };

  renderGroupData = (group, groupData, point) => {
    return (
      <div>
        {point.groupData.map((item, index) => {
          // console.log(item.name);
          // console.log(item.value);
          if (item.name === group) {
            // console.log('hhh');
            return (
              <div key={ index }>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={groupData}
                    onChange={e => this.сhangeGroupData(e.target.value)}
                  >
                    <FormControlLabel
                      value={item.value}
                      control={<Radio color="primary" size="small" />}
                      label={item.value}
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            );
          }
        })
        }
      </div>
    );
  };

  renderMain = (discipline, section, version, group, groupData) => {
    return (
      <div>
        {tables.map((point, index) => {
          // console.log(point);
          if (discipline === point.discipline && point.typeGrouop === version) {
            return (
              <div key={ index}>
                <div className="radiusForm" style={{ display: 'flex' }}>
                  <div className="radiusForm" style={{ width: '60%' }}>
                    <FormControl component="fieldset">
                      <RadioGroup aria-label="gender" name="gender1" value={group} onChange={e => this.сhangeGroup(e.target.value)}>
                        {point.group.map((point, index) => {
                          // console.log(point.value);
                          return (
                            <FormControlLabel
                              key={ index} 
                              value={point.value}
                              control={<Radio color="primary" size="small" />}
                              label={point.value}
                            />
                          );
                        })
                        }
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className="radiusForm" style={{ width: '40%' }}>
                    { this.renderGroupData(group, groupData, point) }
                  </div>
                </div>
                <div className="sanshawGroup">
                  { this.renderTableData(version, group) }
                </div>
              </div>
            );
          }
        },)
        }
      </div>
    );
  };

  renderTableData = (version, group) => {
    if (version === 'Группа А (Техника)') {
      return (
        <div>
          <ScrolingTableA />
        </div>
      );
    }
    if (version === 'Группа В (Общее впечатление)' && group === 'ОТЭ (основные технические элементы)') {
      return (
        <div>
          <ScrolingTableB1 />
        </div>
      );
    }
    if (version === 'Группа В (Общее впечатление)' && group === 'Ошибки') {
      return (
        <div>
          <ScrolingTableB2 />
        </div>
      );
    }
    if (version === 'Группа С (сложности и их соединение)' && group === 'Элементы') {
      return (
        <div>
          <ScrolingTableС1 />
        </div>
      );
    }
    if (version === 'Группа С (сложности и их соединение)' && group === 'Соединение') {
      return (
        <div>
          <ScrolingTableC2 />
        </div>
      );
    }
  };

  render() {
    // const { group, groupData } = this.state;
    const { discipline, section, version, group, groupData } = this.props;
    // console.log('grop:', group, 'groupData:', groupData, version);

    return (
      <div>
        {this.renderMain(discipline, section, version, group, groupData)}
      </div>
    );
  }
}

ScoringMain.propTypes = {
  сhangeGroup: PropTypes.func.isRequired,
  сhangeGroupData: PropTypes.func.isRequired,
  discipline: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  groupData: PropTypes.string.isRequired,
};

export default connect(
  null,
  { }
)(ScoringMain);
