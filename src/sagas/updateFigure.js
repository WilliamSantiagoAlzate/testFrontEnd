//Import libraries
import { put, call, takeLatest } from 'redux-saga/effects';

//Import const of the actions
import { START_UPDATE_FIGURE, SUCCESS_UPDATE_FIGURE, ERROR_UPDATE_FIGURE } from '../redux/consts'

//Import fetch API function
import apiCall from './api';

//Do api request with Saga
function * updateFigureRequest(dataUser) {
    //User data
    const user = dataUser.payload
    //Request Options
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
            'Authorization': user
        }
    };

    //Do request
    try {
        const result = yield call(apiCall, '/game-0.0.1-SNAPSHOT/figure', requestOptions);
        yield put({ type: SUCCESS_UPDATE_FIGURE, result });
    } catch(error) {
        yield put({ type: ERROR_UPDATE_FIGURE, error });
    }
}

//Create watchers
export default function * updateFigure() {
    yield takeLatest(START_UPDATE_FIGURE, updateFigureRequest);
}