import { combineReducers } from 'redux';
import showClasses from './showClassesReducer.js';

const rootReducer = combineReducers({
	showClasses: showClasses
})

export default rootReducer;