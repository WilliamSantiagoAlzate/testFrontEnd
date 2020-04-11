//Import actions consts
import { START_CREATE_FIGURE } from '../consts';

//Create createFigure action
export const createFigure = payload => ({
    type: START_CREATE_FIGURE,
    payload
});