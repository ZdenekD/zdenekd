import IState from './type/state';
import IAction from './type/actions';
import animationReducer from './animation/reducer';
import cursorReducer from './cursor/reducer';
import menuReducer from './menu/reducer';
import messageReducer from './message/reducer';
import projectReducer from './project/reducer';

const reducer = (state: IState, action: IAction): IState => ({
    ...animationReducer({animation: state.animation}, action),
    ...cursorReducer({cursor: state.cursor}, action),
    ...menuReducer({menu: state.menu}, action),
    ...messageReducer({message: state.message}, action),
    ...projectReducer({project: state.project}, action),
});

export default reducer;
