import IAction from '../type/actions';
import IProject from './type';
import ActionsEnum from './type/actions';

const reducer = (state: IProject, action: IAction): IProject => {
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
