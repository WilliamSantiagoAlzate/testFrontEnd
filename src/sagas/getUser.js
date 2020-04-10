//Import libraries
import { put, call, takeLatest } from 'redux-saga/effects';

//Import const of the actions
import { START_GET_USER, SUCCESS_GET_USER, ERROR_GET_USER } from '../redux/consts'

//Import fetch API function
import apiCall from './api';

//Do api request with Saga
function * getUserRequest(dataUser) {
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
        const result = yield call(apiCall, '/user-0.0.1-SNAPSHOT/myprofile', requestOptions);
        yield put({ type: SUCCESS_GET_USER, result });
    } catch(error) {
        yield put({ type: ERROR_GET_USER, error });
    }
}

//Create watchers
export default function * getUser() {
    yield takeLatest(START_GET_USER, getUserRequest);
}