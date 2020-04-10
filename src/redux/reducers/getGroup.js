//Import actions consts
import { START_GET_GROUP, SUCCESS_GET_GROUP, ERROR_GET_GROUP} from '../consts';

//Initialize state
const initialState = {};

//Create getGroup reducers
export default function(state = initialState, action) {
    switch (action.type) {
        case START_GET_GROUP:
            return { ...state, data: action.payload };
        case SUCCESS_GET_GROUP:
            return { ...state, result: action.result };
        case ERROR_GET_GROUP:
            return { ...state, result: action.error };
        default:
            return { ...state };
    }
}