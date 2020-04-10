//Import libraries
import { combineReducers } from 'redux';

//Import reducers
import logIn from './logIn';
import menu from './menu';
import getUser from './getUser';
import getFigure from './getFigure';
import getGroup from './getGroup';

//Add reducers to root
const rootReducer = combineReducers({
	logIn,
	menu,
	getUser,
	getFigure,
	getGroup
});

export default rootReducer;