import {IReducer} from '../type/reducer';
import {IAnimation} from './type';
import {IAction, ActionsEnum} from './type/actions';

const reducer: IReducer<IAnimation, IAction> = (state, action) => {
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
