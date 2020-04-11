//Import libraries
import { combineReducers } from 'redux';

//Import reducers
import logIn from './logIn';
import menu from './menu';
import getUser from './getUser';
import getFigure from './getFigure';
import createFigure from './createFigure';
import updateFigure from './updateFigure';
import getGroup from './getGroup';
import putFigureInfo from './putFigureInfo';

//Add reducers to root
const rootReducer = combineReducers({
	logIn,
	menu,
	getUser,
	getFigure,
	createFigure,
	updateFigure,
	getGroup,
	putFigureInfo
});

export default rootReducer;