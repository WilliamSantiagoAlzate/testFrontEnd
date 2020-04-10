//Import libraries
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

//Import reducers
import rootReducer from '../reducers';

//Import saga watchers
import rootSaga from '../../sagas';

//Create saga middleware
const sagaMiddleware = createSagaMiddleware();

//Create store with saga middleware
export default () => {
    return {
        ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSaga)
    };
};