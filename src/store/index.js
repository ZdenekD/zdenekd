import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducer';

/* eslint-disable */
const devtools = process.env.NODE_ENV === 'development'
    && typeof window !== 'undefined'
    && (
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true, traceLimit: 25})
    );
/* eslint-enable */
const composeEnhancer = devtools || compose;

export const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const initStore = () => createStore(reducer, composeEnhancer(applyMiddleware(...middlewares)));

export default initStore;
