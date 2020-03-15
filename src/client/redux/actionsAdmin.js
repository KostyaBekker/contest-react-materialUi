import {
  LOGIN,
} from './actionTypes';

// eslint-disable-next-line no-shadow
export const login = (login, password) => {
  // console.log(login, password);

  const user = {
    name: login,
    password: password
  };

  const jsonLogin = JSON.stringify(user);
  // console.log(jsonLogin);

  // const user = {
  //   name: 'Kostya',
  //   type: 'admin'
  // };
  localStorage.setItem('saveUser', JSON.stringify(user));
  // console.log(localStorage.getItem('saveUser'));

  const initialState = JSON.parse(localStorage.getItem('saveUser'));
  // console.log(initialState);

  // if (localStorage.getItem('saveUser')) {
  //   initialState = JSON.parse(localStorage.getItem('saveUser'));
  // }
  // if (initialState.name) {
  //   location.pathname = '/main';
  // }else {
  //   location.pathname = '/';
  // }

  return {
    type: LOGIN,
    payload: user
  };
};
