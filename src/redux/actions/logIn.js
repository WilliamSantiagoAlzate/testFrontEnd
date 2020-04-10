//Import actions consts
import { START_LOG_IN } from '../consts';

//Create login action
export const logIn = payload => ({
    type: START_LOG_IN,
    payload
});