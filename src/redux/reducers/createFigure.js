//Import actions consts
import { START_CREATE_FIGURE, SUCCESS_CREATE_FIGURE, ERROR_CREATE_FIGURE} from '../consts';

//Initialize state
const initialState = {};

//Create createFigure reducers
export default function(state = initialState, action) {
    switch (action.type) {
        case START_CREATE_FIGURE:
            return { ...state, data: action.payload };
        case SUCCESS_CREATE_FIGURE:
            return { ...state, result: action.result };
        case ERROR_CREATE_FIGURE:
            return { ...state, result: action.error };
        default:
            return { ...state };
    }
}