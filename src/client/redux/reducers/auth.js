import { LOGIN } from '../actionTypes';

let initialState = {

};

if (localStorage.getItem('saveUser')) {
  initialState = JSON.parse(localStorage.getItem('saveUser'));
}
export default (state = initialState, action) => {
  switch (action.password) {
    case LOGIN: {
      // console.log('reduser', action.payload);
      return action.payload;
    }
    default:
      return state;
  }
};
