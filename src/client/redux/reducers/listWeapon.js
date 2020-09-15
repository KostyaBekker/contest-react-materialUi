import { LISTWEAPON, EDITWEAPON, DELETWEAPON } from '../actionTypes';

const initialState = [
  {
    type: 'Спортивное ушу',
    weapon: 'Кулак',
    data: [
      { id: '1', value: 'Чаньцюань' },
      { id: '2', value: 'Наньцюань' },
      { id: '3', value: 'Тайцзицюань' },
    ],
    valueId: '1587636582888_57204.10319158094'
  },
  {
    type: 'Спортивное ушу',
    weapon: 'Короткое оружие',
    data: [
      { id: '12', value: 'Цзяньшу' },
      { id: '22', value: 'Даошу' },
      { id: '32', value: 'Наньдао' },
      { id: '42', value: 'Тайцзицянь' },
    ],
    valueId: '1587636679785_39441.66356549444'
  },
  {
    type: 'Спортивное ушу',
    weapon: 'Длинное оружие',
    data: [
      { id: '13', value: 'Цяньшу' },
      { id: '23', value: 'Гуньшу' },
      { id: '33', value: 'Наньгунь' },
    ],
    valueId: '1587636725557_120312.393883848375'
  },
  {
    type: 'Спортивное ушу',
    weapon: 'Дуйлянь',
    data: [
      { id: '14', value: 'Дуйлянь' },
      { id: '24', value: 'Дуйлянь цюаньшу' },
      { id: '34', value: 'Дуйлянь цисэ' },
    ],
    valueId: '1587636725557_120212.393883848375'
  },
  {
    type: 'Спортивное ушу',
    weapon: 'Цзитисянму',
    data: [
      { id: '15', value: 'Цзитисянму' },
      { id: '25', value: 'Цзитисянму цюаньшу' },
      { id: '35', value: 'Цзитисянму цисэ' },
    ],
    valueId: '1587636725557_120412.3933883848375'
  },
  {
    type: 'Традиционное ушу',
    option: 'Вариант 1',
    weapon: 'Традиционный кулак',
    data: [
      { id: '16', value: 'Вайцзяцюань' },
      { id: '26', value: 'Нэйцзяцюань' },
      { id: '36', value: 'Сяньсиньцюань' },
    ],
    valueId: '1587636725557_12012.3228r83848375'
  },
  {
    type: 'Традиционное ушу',
    option: 'Вариант 2',
    weapon: 'Group 1. Traditional Taijiquan',
    data: [
      { id: '17', value: 'Chen' },
      { id: '27', value: 'Yang' },
      { id: '37', value: 'Sun' },
    ],
    valueId: '1587636725557_12012.3227f7883848375'
  },
  {
    type: 'Традиционное ушу',
    option: 'Вариант 3',
    weapon: 'Traditional Shaolinquan',
    data: [
      { id: '18', value: 'Group 1. Only for Children А, В' },
      { id: '28', value: 'Group 2. Xiao Hong Quan' },
      { id: '38', value: 'Group 3. Da Hong Quan, Lao Hong Quan' },
    ],
    valueId: '1587636725557_12012.3227b7883848375'
  },
  {
    type: 'Традиционное ушу',
    option: 'Вариант 4',
    weapon: 'Yongchun (Wing Chun)',
    data: [
      { id: '19', value: 'Group 1 Standard Yongchunquan Single Routines of the Chinese Wushu Duanwei System' },
      { id: '29', value: 'Group 2 Traditional Yongchunquan barehand routines Chenshi, Yeshi etc.'},
      { id: '39', value: 'Group 3 Yongchunquan weapons routines (traditional and free)'},
    ],
    valueId: '1587636725557_12012.3227788384e8375'
  },
  {
    // type: 'Спортивное ушу',
    section: 'Саньшоу',
    weapon: 'Санда',
    data: [
      { id: '20', value: 'Group A' },
      { id: '21', value: 'Group B' },
    ],
    valueId: '1587636582888_57204.10319dd158094'
  },
  {
    section: 'Саньшоу',
    weapon: 'Цында',
    data: [
      { id: '22', value: 'Group A' },
      { id: '23', value: 'Group B' },
    ],
    valueId: '15876365d82888_57204.10319dd158094'
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case LISTWEAPON:
      // console.log(action.payload);
      state.push(action.payload);
      // console.log(state);
      return state;

    case EDITWEAPON:
      // console.log(action.payload, state);
      state.forEach((element, index) => {
        if (action.payload.valueId === element.valueId) {
          state[index] = action.payload;
        }
      });
      console.log(state);
      return state;

    case DELETWEAPON:
      // console.log(state);
      state.forEach((element, index) => {
        if (action.payload.valueIdWeapon === element.weapon) {
          state.splice(index, 1);
        }
      });
      // console.log(state);
      return [...state];

    default:
      return state;
  }
};
