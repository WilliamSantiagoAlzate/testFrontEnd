//Import libraries
import { put, call, takeLatest } from 'redux-saga/effects';

//Import const of the actions
import { START_GET_FIGURE, SUCCESS_GET_FIGURE, ERROR_GET_FIGURE } from '../redux/consts'

//Import fetch API function
import apiCall from './api';

//Do api request with Saga
function * getFigureRequest(dataUser) {
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
        const result = yield call(apiCall, '/gameweb-0.0.1-SNAPSHOT/figure', requestOptions);
        yield put({ type: SUCCESS_GET_FIGURE, result });
    } catch(error) {
        yield put({ type: ERROR_GET_FIGURE, error });
    }
}

//Create watchers
export default function * getFigure() {
    yield takeLatest(START_GET_FIGURE, getFigureRequest);
}