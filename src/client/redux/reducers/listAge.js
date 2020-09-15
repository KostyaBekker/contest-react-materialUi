import { LISTAGE, EDITAGE, DELETAGE, SENDAGE } from '../actionTypes';

const initialState = [
  {
    section: 'Таолу',
    discipline: 'Спортивное ушу',
    data: [
      {
        from: '6',
        to: '8',
        ageFrom: '2003-01-01',
        ageTo: '2005-01-01',
        ageCategory: 'Юноши мл.',
        ageSection: '16 форм',
        genderCategory: 'девочки/мальчики',
        id: '1'
      },
      {
        from: '9',
        to: '11',
        ageFrom: '2001-01-01',
        ageTo: '2004-01-01',
        ageCategory: 'Юноши ст.',
        ageSection: 'Чуцзи',
        genderCategory: 'девочки/мальчики',
        id: '2'
      },
    ]
  },
  {
    section: 'Таолу',
    discipline: 'Традиционное ушу',
    data: [
      {
        from: '6',
        to: '8',
        ageFrom: '2003-01-01',
        ageTo: '2005-01-01',
        ageCategory: 'Юноши мл.',
        ageSection: '16 форм',
        genderCategory: 'девочки/мальчики',
        id: '3'
      },
    ]
  },
  {
    section: 'Саньшоу',
    discipline: 'Саньшоу',
    data: [
      {
        from: '15',
        to: '17',
        ageFrom: '2003-01-01',
        ageTo: '2005-01-01',
        ageCategory: 'Юноши мл.',
        ageSection: '30 кг - 60 кг',
        genderCategory: 'девочки/мальчики',
        id: '13'
      },
    ]
  },
];

export default (state = initialState, action) => {
  // let newState = [];
  switch (action.type) {
    case LISTAGE:
      // console.log(action.payload);
      state.map((item, index) => {
        if (item.discipline === action.payload.discipline) {
          // console.log(item);
          item.data.push(action.payload.data);
        }
      });
      // newState = JSON.parse(JSON.stringify(state));
      return [...state];

    case EDITAGE:
      // console.log(state);
      state.map((item, index) => {
        if (item.discipline === action.payload.discipline) {
          // console.log(item);
          item.data.forEach((element, index) => {
            // console.log(action.payload.id);
            if (action.payload.id === element.id) {
              item.data[index] = action.payload.item;
              // item.data.splice(index, 1);
            }
          });
        }
      });
      // newState = JSON.parse(JSON.stringify(state));
      return [...state];

    case DELETAGE:
      state.map((item, index) => {
        if (item.discipline === action.payload.discipline) {
          item.data.forEach((element, index) => {
            if (action.payload.id === element.id) {
              item.data.splice(index, 1);
            }
          });
        }
      });
      return [...state];

    case SENDAGE:
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
