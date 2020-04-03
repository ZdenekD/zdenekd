import {combineReducers} from 'redux';
import app from './app/reducer';
import menu from './menu/reducer';
import project from './project/reducer';

const reducer = combineReducers({
    app,
    menu,
    project,
});

export default reducer;
