//Import actions consts
import { SHOW_MENU } from '../consts';

//Initialize state
const initialState = {};

//Create menu reducers
export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW_MENU:
            return { ...state, dataMenu: action.payload };
        default:
            return { ...state };
    }
}