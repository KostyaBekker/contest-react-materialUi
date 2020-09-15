import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// import './css/competition.css';


// eslint-disable-next-line react/prefer-stateless-function
class Language extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langguage: '',
    };
  }

  сhangelangguage = (langguage) => {
    this.setState({ langguage });
  }


  render() {
    const { langguage } = this.state;
    console.log(langguage);
    return (
      <div className="main__wrap">
        <div className="sanshawGroup">
          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={langguage} onChange={e => this.сhangelangguage(e.target.value)}>
              <FormControlLabel
                value="English"
                control={<Radio color="primary" size="small" />}
                label="English"
              />
              <FormControlLabel
                value="Français"
                control={<Radio color="primary" size="small" />}
                label="Français"
              />
              <FormControlLabel
                value="Espanol"
                control={<Radio color="primary" size="small" />}
                label="Espanol"
              />
              <FormControlLabel
                value="Українська"
                control={<Radio color="primary" size="small" />}
                label="Українська"
              />
              <FormControlLabel
                value="Русский"
                control={<Radio color="primary" size="small" />}
                label="Русский"
              />
              <FormControlLabel
                value="中国"
                control={<Radio color="primary" size="small" />}
                label="中国"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { }
)(Language);
