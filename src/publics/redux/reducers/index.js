import { combineReducers } from 'redux';

import product from './product';
import orders from './orders';

const appReducer = combineReducers({
    product,
    orders
});

export default appReducer;