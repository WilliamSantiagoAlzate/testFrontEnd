//Import libraries
import { get } from 'lodash';

//Create selectors

//Menu selector
export const showMenuSelector = state => get(state, 'menu.dataMenu');
//Login selector
export const logInResultSelector = state => get(state, 'logIn.result');
//Get user selector
export const getUserResultSelector = state => get(state, 'getUser.result');
//Get figure selector
export const getFigureResultSelector = state => get(state, 'getFigure.result');
//Create figure selector
export const createFigureResultSelector = state => get(state, 'createFigure.result');
//Update figure selector
export const updateFigureResultSelector = state => get(state, 'updateFigure.result');
//Get group selector
export const getGroupResultSelector = state => get(state, 'getGroup.result');
//Put figure info selector
export const putFigureInfoSelector = state => get(state, 'putFigureInfo.figureInfo');