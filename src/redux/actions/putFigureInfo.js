//Import actions consts
import { PUT_FIGURE_INFO } from '../consts';

//Create showMenu action
export const putFigureInfo = payload => ({
    type: PUT_FIGURE_INFO,
    payload
});