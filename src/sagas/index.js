//Import libraries
import { all } from 'redux-saga/effects';

//Import requests
import logIn from './logIn';
import getUser from './getUser';
import getFigure from './getFigure';
import createFigure from './createFigure';
import updateFigure from './updateFigure';
import getGroup from './getGroup';

//Add watchers
export default function * rootSaga() {
    yield all([
        logIn(),
        getUser(),
        getFigure(),
        createFigure(),
        updateFigure(),
        getGroup()
    ]);
}