import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import apiReducer from './reducer';
import apiSaga from './saga';
import appReducer from 'modules/app/reducer.';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const reducers = combineReducers({
    api: apiReducer,
    app: appReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(apiSaga);

export default store;