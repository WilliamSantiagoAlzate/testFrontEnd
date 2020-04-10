//Import libraries
import { put, call, takeLatest } from 'redux-saga/effects';

//Import const of the actions
import { START_LOG_IN, SUCCESS_LOG_IN, ERROR_LOG_IN } from '../redux/consts'

//Import fetch API function
import apiCall from './api';

//Do api request with Saga
function * logInRequest(dataUser) {
    //User data
    const email = dataUser.payload.email
    const password = dataUser.payload.password
    //Request Options
    let raw = `{\n "username": "${email}",\n "password": "${password}"\n}`;
    let requestOptions = {
        method: 'POST',
        body: raw,
        redirect: 'follow'
    };

    //Do request
    try {
        const result = yield call(apiCall, '/user-0.0.1-SNAPSHOT/auth', requestOptions);
        yield put({ type: SUCCESS_LOG_IN, result });
    } catch(error) {
        yield put({ type: ERROR_LOG_IN, error });
    }
}

//Create watchers
export default function * logIn() {
    yield takeLatest(START_LOG_IN, logInRequest);
}