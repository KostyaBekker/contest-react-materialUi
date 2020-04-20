import React, { Component } from 'react';
import { connect } from 'react-redux';

// import './css/competition.css';


// eslint-disable-next-line react/prefer-stateless-function
class Scoring extends Component {
  render() {
    return (
      <div className="main__wrap">
        Scoring empty block:(
      </div>
    );
  }
}

export default connect(
  null,
  { }
)(Scoring);
