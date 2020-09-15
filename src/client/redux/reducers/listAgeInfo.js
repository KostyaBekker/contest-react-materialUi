import { LISTAGEINFO, EDITAGEINFO, DELETAGEINFO, SENDAGEINFO } from '../actionTypes';

const initialState = [
  { type: 'ageCategory', id: 1, value: 'Юноши мл.' },
  { type: 'ageCategory', id: 2, value: 'Юноши ст.' },
  { type: 'ageCategory', id: 3, value: 'Юниоры мл.' },
  { type: 'ageCategory', id: 4, value: 'Юниоры ст.' },
  { type: 'ageCategory', id: 5, value: 'Взрослые' },
  { type: 'genderCategory', id: 6, value: 'девочки/мальчики' },
  { type: 'genderCategory', id: 7, value: 'женьщины/мужчины' },
  { discipline: 'Спортивное ушу', type: 'ageSection', id: 11, value: '16 форм' },
  { discipline: 'Спортивное ушу', type: 'ageSection', id: 12, value: 'Чуцзи' },
  { discipline: 'Спортивное ушу', type: 'ageSection', id: 13, value: '1й гуйдин' },
  { discipline: 'Спортивное ушу', type: 'ageSection', id: 14, value: '3й гуйдин' },
  { discipline: 'Спортивное ушу', type: 'ageSection', id: 15, value: 'Цети' },
  { discipline: 'Саньшоу', type: 'ageSection', id: 16, value: '30 кг - 60 кг' },
  { discipline: 'Саньшоу', type: 'ageSection', id: 17, value: '48 кг - 80 кг' },
  { discipline: 'Саньшоу', type: 'ageSection', id: 18, value: '48 кг - 90 кг' },
];

export default (state = initialState, action) => {
  // let newState = [];
  switch (action.type) {
    case LISTAGEINFO:
      // console.log(action.payload);

      state.push(action.payload);   
      // newState = JSON.parse(JSON.stringify(state));
      // console.log(newState);
      return [...state];

    case EDITAGEINFO:
      // console.log(state);
      state.forEach((element, index) => {
        // console.log(element.id, action.payload.id);
        if (action.payload.id === element.id) {
          // console.log(action.payload.value);
          element.value = action.payload.value;
        }
      });
      // newState = JSON.parse(JSON.stringify(state));
      // console.log(state);
      return [...state];

    case DELETAGEINFO:
      state.forEach((item, index) => {
        if (item.id === action.payload.id) {
          state.splice(index, 1);
        }
      });
      return [...state];

    case SENDAGEINFO:
      // state.push(action.payload);
      // newState = JSON.parse(JSON.stringify(state));
      // console.log(state);

      const jsonAge = JSON.stringify(state);
      console.log('jsonAge:', jsonAge);
      // console.log('all:', state);
      return state;

    default:
      return state;
  }
};
