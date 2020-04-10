//Import actions consts
import { START_GET_USER, SUCCESS_GET_USER, ERROR_GET_USER} from '../consts';

//Initialize state
const initialState = {};

//Create getUser reducers
export default function(state = initialState, action) {
    switch (action.type) {
        case START_GET_USER:
            return { ...state, data: action.payload };
        case SUCCESS_GET_USER:
            return { ...state, result: action.result };
        case ERROR_GET_USER:
            return { ...state, result: action.error };
        default:
            return { ...state };
    }
}