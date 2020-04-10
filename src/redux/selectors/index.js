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
//Get group selector
export const getGroupResultSelector = state => get(state, 'getGroup.result');
