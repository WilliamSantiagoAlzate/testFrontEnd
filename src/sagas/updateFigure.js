//Import libraries
import { put, call, takeLatest } from 'redux-saga/effects';

//Import const of the actions
import { START_UPDATE_FIGURE, SUCCESS_UPDATE_FIGURE, ERROR_UPDATE_FIGURE } from '../redux/consts'

//Import fetch API function
import apiCall from './api';

//Do api request with Saga
function * updateFigureRequest(dataUser) {
    //Figure data
    const idFigure = dataUser.payload.figureId;
    const idGroup = dataUser.payload.group_id;
    const figureName = dataUser.payload.figureName;
    const positions = dataUser.payload.positions;
    const user = dataUser.payload.user;

    let raw = JSON.stringify({"idFigureGroup":idGroup,"figureName":figureName,"positions":positions});

    console.log(raw);

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", user);

    //Request Options
    let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    //Do request
    try {
        const result = yield call(apiCall, `/gameweb-0.0.1-SNAPSHOT/figure/${idFigure}`, requestOptions);
        console.log(result);
        yield put({ type: SUCCESS_UPDATE_FIGURE, result });
    } catch(error) {
        console.log(error);
        yield put({ type: ERROR_UPDATE_FIGURE, error });
    }
}

//Create watchers
export default function * updateFigure() {
    yield takeLatest(START_UPDATE_FIGURE, updateFigureRequest);
}