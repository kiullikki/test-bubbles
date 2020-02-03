import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga, rootReducer } from './store';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

export const appStore = createStore( combineReducers(rootReducer), composeWithDevTools(applyMiddleware(sagaMiddleware)));
export type IDispatch = typeof appStore.dispatch;

sagaMiddleware.run(rootSaga);