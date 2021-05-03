import IAction from '../type/actions';
import IMenu from './type';
import ActionsEnum from './type/actions';

const reducer = (state: IMenu, action: IAction): IMenu => {
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
