import {
  EDITSCROLINGTABLELIST
} from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const editAgeInfo = (id, item) => {
  // console.log(id, value);
  const valueEdit = {
    id: id,
    item: item,
  };
  return {
    type: EDITSCROLINGTABLELIST,
    payload: valueEdit
  };
};
