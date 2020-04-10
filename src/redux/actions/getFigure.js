//Import actions consts
import { START_GET_FIGURE } from '../consts';

//Create getFigure action
export const getFigure = payload => ({
    type: START_GET_FIGURE,
    payload
});