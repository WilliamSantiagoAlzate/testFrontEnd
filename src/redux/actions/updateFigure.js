//Import actions consts
import { START_UPDATE_FIGURE } from '../consts';

//Create updateFigure action
export const updateFigure = payload => ({
    type: START_UPDATE_FIGURE,
    payload
});