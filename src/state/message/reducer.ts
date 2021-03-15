import IAction from '../type/actions';
import IMessage from './type';
import ActionsEnum from './type/actions';
import initialState from './initialState';

const reducer = (state: IMessage, action: IAction): IMessage => {
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
