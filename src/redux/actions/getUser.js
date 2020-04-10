//Import actions consts
import { START_GET_USER } from '../consts';

//Create getUser action
export const getUser = payload => ({
    type: START_GET_USER,
    payload
});