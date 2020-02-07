import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const initStore = () => createStore(reducer, applyMiddleware(thunk));

export default initStore;
