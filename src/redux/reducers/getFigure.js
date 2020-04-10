//Import actions consts
import { START_GET_FIGURE, SUCCESS_GET_FIGURE, ERROR_GET_FIGURE} from '../consts';

//Initialize state
const initialState = {};

//Create getFigure reducers
export default function(state = initialState, action) {
    switch (action.type) {
        case START_GET_FIGURE:
            return { ...state, data: action.payload };
        case SUCCESS_GET_FIGURE:
            return { ...state, result: action.result };
        case ERROR_GET_FIGURE:
            return { ...state, result: action.error };
        default:
            return { ...state };
    }
}