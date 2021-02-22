import IState from '../type/state';
import IAction from '../type/actions';
import ActionsEnum from './type/actions';

const reducer = (state: IState, action: IAction): IState => {
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
