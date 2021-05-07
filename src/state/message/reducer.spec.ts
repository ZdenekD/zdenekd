import reducer from './reducer';
import initialState from './initialState';
import {IMessage} from './type';
import VariantsEnum from '../../enums/VariantsEnum';
import {ActionsEnum} from './type/actions';

describe('Message reducer', () => {
    it('change state on `setMessage` action', () => {
        const value: IMessage = {
            message: {
                variant: VariantsEnum.danger,
                content: 'Error message',
            },
        };
        const action = {type: ActionsEnum.set, payload: value};
        const state = reducer(initialState, action);

        expect(state).toEqual(value);
    });

    it('change to initial message state on `unsetMessage` action', () => {
        const value: IMessage = initialState;
        const action = {type: ActionsEnum.unset, payload: value};
        const state = reducer(initialState, action);

        expect(state).toEqual(value);
    });
});
