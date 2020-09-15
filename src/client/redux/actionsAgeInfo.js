import {
  LISTAGEINFO,
  EDITAGEINFO,
  DELETAGEINFO,
} from './actionTypes';

// eslint-disable-next-line no-shadow
export const addAgeInfo = (discipline, typeAgeSelect) => {
  const createRid = () => {
    const min = 1;
    const max = 100000;
    const time = new Date().getTime();
    const random = Math.random() * (max - min) + min;
    return `${time}_${random}`;
  };

  const ageInfo = {
    discipline: discipline,
    type: typeAgeSelect,
    id: createRid(),
    value: ''
  };

  return {
    type: LISTAGEINFO,
    payload: ageInfo
  };
};
export const editAgeInfo = (id, value) => {
  const valueEdit = {
    id: id,
    value: value
  };
  return {
    type: EDITAGEINFO,
    payload: valueEdit
  };
};
export const deleteAgeInfo = (id, discipline) => {
  const valueDelete = {
    discipline: discipline,
    id: id
  };
  // console.log(veapon);
  // console.log(id);
  return {
    type: DELETAGEINFO,
    payload: valueDelete
  };
};
// export const sendAge = () => {
//   // const age = {
//   //   section: section
//   // };

//   return {
//     type: SENDAGE,
//     // payload: age
//   };
// };
