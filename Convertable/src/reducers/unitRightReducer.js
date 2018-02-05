import { categories } from '../database.json';
import { CHANGE_UNIT_RIGHT } from '../actions/types';
import { AsyncStorage } from 'react-native';

export default (state = 0, action) => {
  return action.type === CHANGE_UNIT_RIGHT
    ? action.payload
    : state;
}