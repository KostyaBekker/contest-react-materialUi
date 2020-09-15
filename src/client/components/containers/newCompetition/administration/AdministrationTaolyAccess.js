import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

// eslint-disable-next-line react/prefer-stateless-function
class AdministrationTaolyAccess extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  editTypeAccess = (typeAccess) => {
    const { сhangeTypeAccess } = this.props;
    сhangeTypeAccess(typeAccess);
    // this.props.сhangeTypeAccess(typeAccess);
  };

  render() {
    // const { group, groupData } = this.state;
    // const { typeAccess } = this.props;
    // console.log('grop:', group, 'groupData:', groupData, version);

    return (
      <div className="sanshawGroup" style={{ width: '50%' }}>
        <FormControl component="fieldset">
          <FormLabel component="legend" style={{ color: 'black' }}>Доступ:</FormLabel>
          <FormGroup>
            <FormControlLabel
              value="Регистрация пользователей"
              control={<Checkbox color="primary" size="small" />}
              label="Регистрация пользователей"
            />
            <FormControlLabel
              value="Изменение основных установок"
              control={<Checkbox color="primary" size="small" />}
              label="Изменение основных установок"
            />
            <FormControlLabel
              value="Изменение видов соревнований"
              control={<Checkbox color="primary" size="small" />}
              label="Изменение видов соревнований"
            />
            <FormControlLabel
              value="Изменение судейства"
              control={<Checkbox color="primary" size="small" />}
              label="Изменение судейства"
            />
            <FormControlLabel
              value="Изменение оценивания"
              control={<Checkbox color="primary" size="small" />}
              label="Изменение оценивания"
            />
            <FormControlLabel
              value="Изменение языка"
              control={<Checkbox color="primary" size="small" />}
              label="Изменение языка"
            />
            <FormControlLabel
              value="Удаление любой информации"
              control={<Checkbox color="primary" size="small" />}
              label="Удаление любой информации"
            />
            <FormControlLabel
              value="Подтверждение оценки"
              control={<Checkbox color="primary" size="small" />}
              label="Подтверждение оценки"
            />
            <FormControlLabel
              value="Подсчет финальной оценки"
              control={<Checkbox color="primary" size="small" />}
              label="Подсчет финальной оценки"
            />
            <FormControlLabel
              value="Выставление оценки"
              control={<Checkbox color="primary" size="small" />}
              label="Выставление оценки"
            />
            <FormControlLabel
              value="Приём/подтверждение заявок"
              control={<Checkbox color="primary" size="small" />}
              label="Приём/подтверждение заявок"
            />
            <FormControlLabel
              value="Работа с базой данных всех членов"
              control={<Checkbox color="primary" size="small" />}
              label="Работа с базой данных всех членов"
            />
            <FormControlLabel
              value="Регистрация участников"
              control={<Checkbox color="primary" size="small" />}
              label="Регистрация участников"
            />
            <FormControlLabel
              value="Открывание доступа командам д/р"
              control={<Checkbox color="primary" size="small" />}
              label="Открывание доступа командам д/р"
            />
            <FormControlLabel
              value="Объединение групп"
              control={<Checkbox color="primary" size="small" />}
              label="Объединение групп"
            />
            <FormControlLabel
              value="Жеребъёвка"
              control={<Checkbox color="primary" size="small" />}
              label="Жеребъёвка"
            />
            <FormControlLabel
              value="Расписание"
              control={<Checkbox color="primary" size="small" />}
              label="Расписание"
            />
            <FormControlLabel
              value="Документы (протоколы, дипломы, выписки, отчеты)"
              control={<Checkbox color="primary" size="small" />}
              label="Документы (протоколы, дипломы, выписки, отчеты)"
            />
            <FormControlLabel
              value="Просмотр/изменение/удаление отчетов"
              control={<Checkbox color="primary" size="small" />}
              label="Просмотр/изменение/удаление отчетов"
            />
            <FormControlLabel
              value="Подключение/настройка трансляции"
              control={<Checkbox color="primary" size="small" />}
              label="Подключение/настройка трансляции"
            />
            <FormControlLabel
              value="Подключение/настройка экранов/мониторов"
              control={<Checkbox color="primary" size="small" />}
              label="Подключение/настройка экранов/мониторов"
            />
          </FormGroup>
        </FormControl>
      </div>
    );
  }
}

AdministrationTaolyAccess.propTypes = {
  сhangeTypeAccess: PropTypes.func.isRequired,
};

export default connect(
  null,
  { }
)(AdministrationTaolyAccess);
