import { CHANGE_BASE_VALUE, CHANGE_UNIT_RIGHT, CHANGE_UNIT_LEFT } from './types';

export const createBaseValueAction = newValue => ({
  type: CHANGE_BASE_VALUE,
  payload: newValue
});

export const changeUnitLeftAction = newValue => ({
  type: CHANGE_UNIT_LEFT,
  payload: newValue
});

export const changeUnitRightAction = newValue => ({
  type: CHANGE_UNIT_RIGHT,
  payload: newValue
});