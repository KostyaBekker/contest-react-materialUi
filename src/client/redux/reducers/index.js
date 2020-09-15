import { combineReducers } from 'redux';
import auth from './auth';
import listWeapon from './listWeapon';
import listAge from './listAge';
import listAgeInfo from './listAgeInfo';
import listScrolingTable from './listScrolingTable';

export default combineReducers({ auth, listWeapon, listAge, listAgeInfo, listScrolingTable });
