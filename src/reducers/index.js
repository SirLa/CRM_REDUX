import contacts from './contacts';
import templates from './templates';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({contacts, templates});

export default rootReducer;