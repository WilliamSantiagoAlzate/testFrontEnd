//Import libraries
import { put, call, takeLatest } from 'redux-saga/effects';

//Import const of the actions
import { START_GET_GROUP, SUCCESS_GET_GROUP, ERROR_GET_GROUP } from '../redux/consts'

//Import fetch API function
import apiCall from './api';

//Do api request with Saga
function * getGroupRequest(dataUser) {
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
        const result = yield call(apiCall, '/game-0.0.1-SNAPSHOT/groupfigure', requestOptions);
        yield put({ type: SUCCESS_GET_GROUP, result });
    } catch(error) {
        yield put({ type: ERROR_GET_GROUP, error });
    }
}

//Create watchers
export default function * getGroup() {
    yield takeLatest(START_GET_GROUP, getGroupRequest);
}