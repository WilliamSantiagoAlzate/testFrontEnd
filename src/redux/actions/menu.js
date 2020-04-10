//Import actions consts
import { SHOW_MENU } from '../consts';

//Create showMenu action
export const showMenu = payload => ({
    type: SHOW_MENU,
    payload
});