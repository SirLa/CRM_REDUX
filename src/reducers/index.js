import contacts from './contacts';
import templates from './templates';
import mailingLists from './mailingLists'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({contacts, templates, mailingLists});

export default rootReducer;