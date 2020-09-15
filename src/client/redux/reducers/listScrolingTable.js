import { EDITSCROLINGTABLELIST } from '../actionTypes';

const initialState = [
  { 
    id: 1,
    version: 'Группа А (Техника)', 
    data: [
      { id: 1, nameType: '', nameWeapon: '', code: '', cost: '', test: '' },
      { id: 2, nameType: '', nameWeapon: '', code: '', cost: '', test: '' },
      { id: 3, nameType: '', nameWeapon: '', code: '', cost: '', test: '' },
      { id: 4, nameType: '', nameWeapon: '', code: '', cost: '', test: '' },
      { id: 5, nameType: '', nameWeapon: '', code: '', cost: '', test: '' },
      { id: 6, nameType: '', nameWeapon: '', code: '', cost: '', test: '' },
    ]
  },
  {
    id: 2,
    version: 'Группа В (Общее впечатление)',
    group: 'ОТЭ (основные технические элементы)',
    data: [
      'Цюань', 'Чжан', 'Гоу', 'Мабу', 'Гунбу', 'Пубу', 'Сюйбу', 'Таньтуй', 'Чуайтуй', 'Хоусаотуй', 'Коутуй',
      '', '', '', '', '', '', '', '', ''
    ]
  },
  {
    id: 3,
    version: 'Группа В (Общее впечатление)',
    group: 'Ошибки',
    data: [
      { id: 1, code: '', cost: '', test: '' },
      { id: 2, code: '', cost: '', test: '' },
      { id: 3, code: '', cost: '', test: '' },
      { id: 4, code: '', cost: '', test: '' },
      { id: 5, code: '', cost: '', test: '' },
      { id: 6, code: '', cost: '', test: '' },
    ]
  },
  {
    id: 4,
    version: 'Группа С (сложности и их соединение)',
    group: 'Элементы',
    data: [
      { id: 1, nameType: '', nameWeapon: '', code: '', cost: '', test: '' },
      { id: 2, nameType: '', nameWeapon: '', code: '', cost: '', test: '' },
      { id: 3, nameType: '', nameWeapon: '', code: '', cost: '', test: '' },
      { id: 4, nameType: '', nameWeapon: '', code: '', cost: '', test: '' },
      { id: 5, nameType: '', nameWeapon: '', code: '', cost: '', test: '' },
      { id: 6, nameType: '', nameWeapon: '', code: '', cost: '', test: '' },
    ]
  },
  {
    id: 5,
    version: 'Группа С (сложности и их соединение)',
    group: 'Соединение',
    data: [
      { id: 1, part: 'first', nameType: '', nameWeapon: '', code: '', cost: '', test: '' },
      { id: 2, part: 'second', nameType: '', nameWeapon: '', code: '', cost: '', test: '' },
      { id: 3, part: 'third', nameType: '', nameWeapon: '', code: '', cost: '', test: '' },
      { id: 4, part: 'fourth', nameType: '', nameWeapon: '', code: '', cost: '', test: '' },
    ]
  },
];

export default (state = initialState, action) => {
  // let newState = [];
  switch (action.type) {

    case EDITSCROLINGTABLELIST:
      // console.log(state);
      state.forEach((element, index) => {
        // console.log(element.id, action.payload.id);
        if (action.payload.id === element.id) {
          // console.log(action.payload.item);
          state[index] = action.payload.item;
        }
      });
      // newState = JSON.parse(JSON.stringify(state));
      console.log(state);
      return [...state];

    // case SENDAGEINFO:
    //   // state.push(action.payload);
    //   // newState = JSON.parse(JSON.stringify(state));
    //   // console.log(state);

    //   const jsonAge = JSON.stringify(state);
    //   console.log('jsonAge:', jsonAge);
    //   // console.log('all:', state);
    //   return state;

    default:
      return state;
  }
};
