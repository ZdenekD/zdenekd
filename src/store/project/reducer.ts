import {IReducer} from '../types/reducer';
import {IProject} from './types';
import {IAction, ActionsEnum} from './types/actions';

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
