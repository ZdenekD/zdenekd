import {IReducer} from '../types/reducer';
import initialState from './initialState';
import {ICursor} from './types';
import {IAction, ActionsEnum} from './types/actions';

const reducer: IReducer<ICursor, IAction> = (state, action) => {
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
