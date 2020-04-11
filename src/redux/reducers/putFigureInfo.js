//Import actions consts
import { PUT_FIGURE_INFO } from '../consts';

//Initialize state
const initialState = {};

//Create figure info reducers
export default function(state = initialState, action) {
    switch (action.type) {
        case PUT_FIGURE_INFO:
            return { ...state, figureInfo: action.payload };
        default:
            return { ...state };
    }
}