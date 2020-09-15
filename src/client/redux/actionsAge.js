import {
  LISTAGE,
  EDITAGE,
  DELETAGE,
  SENDAGE
} from './actionTypes';

// eslint-disable-next-line no-shadow
export const addAge = (discipline) => {
  const createRid = () => {
    const min = 1;
    const max = 100000;
    const time = new Date().getTime();
    const random = Math.random() * (max - min) + min;
    return `${time}_${random}`;
  };

  const ageData = {
    discipline: discipline,
    data: {
      from: '',
      to: '',
      ageFrom: '',
      ageTo: '',
      ageCategory: '',
      ageSection: '',
      genderCategory: '',
      id: createRid()
    }
  };

  return {
    type: LISTAGE,
    payload: ageData
  };
};
export const editAge = (id, item, discipline) => {
  const valueEdit = {
    discipline: discipline,
    item: item,
    id: id
  };
  return {
    type: EDITAGE,
    payload: valueEdit
  };
};
export const deleteAge = (id, discipline) => {
  const valueDelete = {
    discipline: discipline,
    id: id
  };
  // console.log(veapon);
  // console.log(id);
  return {
    type: DELETAGE,
    payload: valueDelete
  };
};
export const sendAge = () => {
  // const age = {
  //   section: section
  // };

  return {
    type: SENDAGE,
    // payload: age
  };
};
