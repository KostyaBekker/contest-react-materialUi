import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './css/aboutSportsmanBlock.css';

// eslint-disable-next-line react/prefer-stateless-function
class CompetitionInfoBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    // const { competition } = this.props;
    const { sportsman } = this.props;
    // console.log(sportsman);

    return (
      <div>
        <div className="header__info">
          <div className="photo"> <img src="/static/images/grid/complex.jpg" /> </div>
          <div className="sportsman__info">
            <div>{ sportsman.name }</div>
            <div>
              <div>
                { sportsman.obl }
              </div>
              <div>
                { sportsman.date }
              </div>
            </div>
            <div>
              <div>
                { sportsman.town }
              </div>
              <div>
                { sportsman.category }
              </div>
            </div>
            <div>
              <div>
                { sportsman.club }
              </div>
              <div>
                { sportsman.trainer }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CompetitionInfoBlock.defaultProps = {
  competition: {},
} ;

CompetitionInfoBlock.propTypes = {
  // index: PropTypes.number,
  competition: PropTypes.shape({ 
    name: PropTypes.string,
    time: PropTypes.string,
    sportsman: PropTypes.array,
  })
};

export default connect(
  null,
  { }
)(CompetitionInfoBlock);
