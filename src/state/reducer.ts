import IState from './type/state';
import IAction from './type/actions';
import cursorReducer from './cursor/reducer';
import messageReducer from './message/reducer';

const reducer = (state: IState, action: IAction): IState => ({
    cursor: {...cursorReducer(state, action).cursor},
    message: {...messageReducer(state, action).message},
});

export default reducer;
