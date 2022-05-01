import { SET_CATEGORIES_TYPES } from './categories.types';

import { createAction } from '../../utils/reducer/reducer.utils';

export const setCategoriesMap = (categoriesMap) =>
  createAction(SET_CATEGORIES_TYPES.SET_CATEGORIES_MAP, categoriesMap);
