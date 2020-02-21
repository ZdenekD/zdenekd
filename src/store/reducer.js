import {combineReducers} from 'redux';
import app from './app/reducer';
import menu from './menu/reducer';

const reducer = combineReducers({app, menu});

export default reducer;
