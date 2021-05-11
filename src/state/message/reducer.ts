import initialState from './initialState';
import {IReducer} from '../type/reducer';
import {IMessage} from './type';
import {IAction, ActionsEnum} from './type/actions';

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
