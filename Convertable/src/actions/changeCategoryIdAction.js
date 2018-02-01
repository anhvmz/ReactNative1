import { CHANGE_CATEGORY_ID } from './types';

export const changeCategoryIdAction = newValue => ({
    type: CHANGE_CATEGORY_ID,
    payload: newValue
});