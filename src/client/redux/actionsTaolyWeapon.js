import {
  LISTWEAPON,
  EDITWEAPON,
  DELETWEAPON,
} from './actionTypes';

// eslint-disable-next-line no-shadow
export const addWeapon = (inputWeapon, inputWeaponType, typeDiscipline, typeOption, typeSection ) => {
  // console.log(inputWeapon);
  const createRid = () => {
    const min = 1;
    const max = 100000;
    const time = new Date().getTime();
    const random = Math.random() * (max - min) + min;
    return `${time}_${random}`;
  };

  const addWeaponInput = {
    type: typeDiscipline,
    section: typeSection,
    option: typeOption,
    weapon: inputWeapon,
    data: inputWeaponType,
    valueId: createRid()
  };
  // console.log(addWeaponInput.valueId);
  const jsonaddWeaponInput = JSON.stringify(addWeaponInput);
  console.log(jsonaddWeaponInput);

  return {
    type: LISTWEAPON,
    payload: addWeaponInput
  };
};
export const editWeapon = (inputWeapon, inputWeaponType, valueId, typeDiscipline, typeOption, typeSection) => {
  const editWeaponInput = {
    type: typeDiscipline,
    section: typeSection,
    option: typeOption,
    weapon: inputWeapon,
    data: inputWeaponType,
    valueId: valueId
  };

  const jsonEditWeaponInput = JSON.stringify(editWeaponInput);
  console.log(jsonEditWeaponInput);

  return {
    type: EDITWEAPON,
    payload: editWeaponInput
  };
};
export const deleteWeapon = (veapon) => {
  const valueIdWeapon = {
    valueIdWeapon: veapon
  };
  // console.log(veapon);
  // console.log(valueIdWeapon);
  return {
    type: DELETWEAPON,
    payload: valueIdWeapon
  };
};
