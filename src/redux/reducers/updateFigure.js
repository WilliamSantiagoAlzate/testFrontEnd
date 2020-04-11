//Import actions consts
import { START_UPDATE_FIGURE, SUCCESS_UPDATE_FIGURE, ERROR_UPDATE_FIGURE} from '../consts';

//Initialize state
const initialState = {};

//Create updateFigure reducers
export default function(state = initialState, action) {
    switch (action.type) {
        case START_UPDATE_FIGURE:
            return { ...state, data: action.payload };
        case SUCCESS_UPDATE_FIGURE:
            return { ...state, result: action.result };
        case ERROR_UPDATE_FIGURE:
            return { ...state, result: action.error };
        default:
            return { ...state };
    }
}