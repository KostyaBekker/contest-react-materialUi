import React, { Component } from 'react';
import { connect } from 'react-redux';

// import './css/competition.css';


// eslint-disable-next-line react/prefer-stateless-function
class Language extends Component {
  render() {
    return (
      <div className="main__wrap">
        Language empty block:(
      </div>
    );
  }
}

export default connect(
  null,
  { }
)(Language);
