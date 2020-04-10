//Import actions consts
import { START_GET_GROUP } from '../consts';

//Create getGroup action
export const getGroup = payload => ({
    type: START_GET_GROUP,
    payload
});