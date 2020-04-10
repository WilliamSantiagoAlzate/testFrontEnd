//Import libraries
import { all } from 'redux-saga/effects';

//Import requests
import logIn from './logIn';
import getUser from './getUser';
import getFigure from './getFigure';
import getGroup from './getGroup';

//Add watchers
export default function * rootSaga() {
    yield all([
        logIn(),
        getUser(),
        getFigure(),
        getGroup()
    ]);
}