import {combineReducers} from 'redux';

import { authReducer } from './auth';
import { postReducer } from './post';

export const allReducers = combineReducers({
    authReducer,
    postReducer
})