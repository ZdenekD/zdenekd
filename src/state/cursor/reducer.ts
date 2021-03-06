import initialState from './initialState';
import {IReducer} from '../type/reducer';
import {ICursor} from './type';
import {IAction, ActionsEnum} from './type/actions';

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
