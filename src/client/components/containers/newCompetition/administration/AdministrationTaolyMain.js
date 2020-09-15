import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import AdministrationTaolyAccess from './AdministrationTaolyAccess';
import AdministrationTaolyInfo from './AdministrationTaolyInfo';

// eslint-disable-next-line react/prefer-stateless-function
class AdministrationTaolyMain extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  editTypeAccess = (typeAccess) => {
    const { сhangeTypeAccess } = this.props;
    сhangeTypeAccess(typeAccess);
  };

  render() {
    // const { group, groupData } = this.state;
    const { typeAccess } = this.props;
    // console.log('grop:', group, 'groupData:', groupData, version);

    return (
      <div>
        <div className="sanshawGroup">
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={typeAccess}
              onChange={e => this.editTypeAccess(e.target.value)}
            >
              <FormControlLabel
                value="Admin"
                control={<Radio color="primary" size="small" />}
                label="Admin"
              />
              <FormControlLabel
                value="Главный судья"
                control={<Radio color="primary" size="small" />}
                label="Главный судья"
              />
              <FormControlLabel
                value="Главный секретарь"
                control={<Radio color="primary" size="small" />}
                label="Главный секретарь"
              />
              <FormControlLabel
                value="Апелляционное жюри"
                control={<Radio color="primary" size="small" />}
                label="Апелляционное жюри"
              />
              <FormControlLabel
                value="Старший судья/секретарь"
                control={<Radio color="primary" size="small" />}
                label="Старший судья/секретарь"
              />
              <FormControlLabel
                value="Боковой судья"
                control={<Radio color="primary" size="small" />}
                label="Боковой судья"
              />
              <FormControlLabel
                value="Секретарь 1"
                control={<Radio color="primary" size="small" />}
                label="Секретарь 1"
              />
              <FormControlLabel
                value="Секретарь 2"
                control={<Radio color="primary" size="small" />}
                label="Секретарь 2"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div style={{ display: 'flex' }}>
          <AdministrationTaolyAccess />
          <AdministrationTaolyInfo />
        </div>
      </div>
    );
  }
}

AdministrationTaolyMain.propTypes = {
  сhangeTypeAccess: PropTypes.func.isRequired,
  typeAccess: PropTypes.string.isRequired,
};

export default connect(
  null,
  { }
)(AdministrationTaolyMain);
