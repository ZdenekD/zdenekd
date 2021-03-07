import IAction from '../type/actions';
import IAnimation from './type';
import ActionsEnum from './type/actions';

const reducer = (state: IAnimation, action: IAction): IAnimation => {
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
