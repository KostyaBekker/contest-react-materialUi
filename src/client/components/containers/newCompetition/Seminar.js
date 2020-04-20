import React, { Component } from 'react';
import { connect } from 'react-redux';

// import './css/competition.css';


// eslint-disable-next-line react/prefer-stateless-function
class Seminar extends Component {
  render() {
    return (
      <div className="main__wrap">
        Seminar empty block:(
      </div>
    );
  }
}

export default connect(
  null,
  { }
)(Seminar);
