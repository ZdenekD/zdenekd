import IState from '../type/state';
import IAction from '../type/actions';
import ActionsEnum from './type/actions';
import {initialState} from './type';

const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case ActionsEnum.set:
            return ({
                ...state,
                ...action.payload,
            });
        case ActionsEnum.unset:
            return ({
                ...state,
                ...initialState,
            });
        default:
            return state;
    }
};

export default reducer;
