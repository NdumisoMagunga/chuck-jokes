import { combineReducers } from 'redux'

import categoriesReducer from './categoriesReducer';
import categoryReducer from './categoryReducer';

// combining our reducers using the combineReducers from redux
export default combineReducers({
    categories: categoriesReducer,
    category: categoryReducer,
})