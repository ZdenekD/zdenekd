import IState from './type/state';
import IAction from './type/actions';
import animationReducer from './animation/reducer';
import cursorReducer from './cursor/reducer';
import menuReducer from './menu/reducer';
import messageReducer from './message/reducer';
import projectReducer from './project/reducer';

const reducer = (state: IState, action: IAction): IState => ({
    animation: {...animationReducer(state, action).animation},
    cursor: {...cursorReducer(state, action).cursor},
    menu: {...menuReducer(state, action).menu},
    message: {...messageReducer(state, action).message},
    project: {...projectReducer(state, action).project},
});

export default reducer;
