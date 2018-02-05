import { combineReducers } from 'redux';

import baseValueReducer from './baseValueReducer';
import categoryReducer from './categoryReducer';
import unitLeftReducer from './unitLeftReducer';
import unitRightReducer from './unitRightReducer';
import {navigationReducer} from '../AppNavigation';

export default reducers = combineReducers({
  baseValue: baseValueReducer,
  category: categoryReducer,
  nav: navigationReducer,
  unitLeft: unitLeftReducer,
  unitRight: unitRightReducer
});