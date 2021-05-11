import {IReducer} from '../type/reducer';
import {IProject} from './type';
import {IAction, ActionsEnum} from './type/actions';

const reducer: IReducer<IProject, IAction> = (state, action) => {
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
