
import { combineReducers } from 'redux';


import { accountReducer } from './reducers';

import { productReducer } from '../product/reducersProduct'
const rootReducer = combineReducers({

    user: accountReducer,
    product: productReducer

});

export default rootReducer;
export type State = ReturnType<typeof rootReducer>