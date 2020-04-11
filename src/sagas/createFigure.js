//Import libraries
import { put, call, takeLatest } from 'redux-saga/effects';

//Import const of the actions
import { START_CREATE_FIGURE, SUCCESS_CREATE_FIGURE, ERROR_CREATE_FIGURE } from '../redux/consts'

//Import fetch API function
import apiCall from './api';

//Do api request with Saga
function * createFigureRequest(dataUser) {
    //Figure data
    const idGroup = dataUser.payload.group_id;
    const figureName = dataUser.payload.figureName;
    const positions = dataUser.payload.positions;
    const user = dataUser.payload.user;

    let raw = JSON.stringify({"id_grupofigure":idGroup,"figurename":figureName,"positions":positions});

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", user);

    //Request Options
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    //Do request
    try {
        const result = yield call(apiCall, '/game-0.0.1-SNAPSHOT/figure', requestOptions);
        yield put({ type: SUCCESS_CREATE_FIGURE, result });
    } catch(error) {
        yield put({ type: ERROR_CREATE_FIGURE, error });
    }
}

//Create watchers
export default function * createFigure() {
    yield takeLatest(START_CREATE_FIGURE, createFigureRequest);
}