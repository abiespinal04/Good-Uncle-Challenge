import {combineReducers} from 'redux';
import {userInfoReducer} from './userInfoReducer';
import {subTotalReducer} from './subTotalReducer';
import {itemReducer} from './itemReducer';

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  subTotal: subTotalReducer,
  item: itemReducer,
});

export default rootReducer;
