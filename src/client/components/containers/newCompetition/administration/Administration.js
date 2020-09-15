import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import AdministrationTaolyMain from './AdministrationTaolyMain';

// import './css/competition.css';


// eslint-disable-next-line react/prefer-stateless-function
class Administration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 'Таолу',
      typeAccess: ''

    };
  }

  editSection = (sectionName) => {
    this.setState({
      section: sectionName,
      typeAccess: ''
    });
  };

  сhangeTypeAccess = (typeAccess) => {
    console.log(typeAccess);
    this.setState({ typeAccess });
  };

  renderTaolyMain = (section, typeAccess) => {
    return (
      <div>
        <AdministrationTaolyMain
          section={typeAccess}
          typeAccess={typeAccess}
          сhangeTypeAccess={this.сhangeTypeAccess}
        />
      </div>
    );
  };

  render() {
    const { section, typeAccess } = this.state;
    console.log(section, typeAccess);

    return (
      <div className="main__list__data">
        <div className="list__data">
          <Button
            size="small"
            className="button__form"
            variant="outlined"
            component="label"
            color={section === 'Таолу' ? 'primary' : 'default'}
            onClick={() => this.editSection('Таолу', 'Спортивное ушу')}
          >
            Таолу
          </Button>
          <Button
            size="small"
            className="button__form"
            variant="outlined"
            component="label"
            color={section === 'Саньшоу' ? 'primary' : 'default'}
            onClick={() => this.editSection('Саньшоу', 'Саньшоу')}
          >
            Саньшоу
          </Button>
          {this.renderTaolyMain(section, typeAccess)}
        </div>
        <div className="button__general__setting">
          <Button
            style={{
              width: '50%',
            }}
            size="small"
            variant="outlined"
            // onClick={() => this.addAge(section)}
          >
            Save
          </Button>
          <Button
            style={{
              width: '50%',
            }}
            size="small"
            variant="outlined"
            // onClick={() => this.updateType('age')}
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { }
)(Administration);
