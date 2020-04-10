//Import actions consts
import { START_LOG_IN, SUCCESS_LOG_IN, ERROR_LOG_IN} from '../consts';

//Initialize state
const initialState = {};

//Create login reducers
export default function(state = initialState, action) {
    switch (action.type) {
        case START_LOG_IN:
            return { ...state, data: action.payload };
        case SUCCESS_LOG_IN:
            return { ...state, result: action.result };
        case ERROR_LOG_IN:
            return { ...state, result: action.error };
        default:
            return { ...state };
    }
}