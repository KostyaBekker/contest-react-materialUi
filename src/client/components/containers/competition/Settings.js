import React, { Component } from 'react';
import { connect } from 'react-redux';

import './css/competition.css';


// eslint-disable-next-line react/prefer-stateless-function
class Sitting extends Component {

  render() {
    return (
      <div className="main__wrap">
        empty block:(
      </div>
    );
  }
}

export default connect(
  null,
  { }
)(Sitting);
