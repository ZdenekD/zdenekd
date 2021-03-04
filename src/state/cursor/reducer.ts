import IAction from '../type/actions';
import ICursor from './type';
import ActionsEnum from './type/actions';

const reducer = (state: ICursor, action: IAction): ICursor => {
    switch (action.type) {
        case ActionsEnum.set:
            return ({
                ...state,
                ...action.payload,
            });
        case ActionsEnum.unset:
            return ({
                ...state,
                ...action.payload,
            });
        default:
            return state;
    }
};

export default reducer;
