import {IReducer} from '../types/reducer';
import {IMenu} from './types';
import {IAction, ActionsEnum} from './types/actions';

const reducer: IReducer<IMenu, IAction> = (state, action) => {
    switch (action.type) {
        case ActionsEnum.set:
            return ({
                ...state,
                ...action.payload,
            });
        default:
            return state;
    }
};

export default reducer;
