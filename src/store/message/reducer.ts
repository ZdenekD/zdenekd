import {IReducer} from '../types/reducer';
import initialState from './initialState';
import {IAction, ActionsEnum} from './types/actions';
import {IMessage} from './types';

const reducer: IReducer<IMessage, IAction> = (state, action) => {
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
