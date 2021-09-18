import VariantsEnum from '@/utils/enums/VariantsEnum';
import reducer from './reducer';
import initialState from './initialState';
import {ActionsEnum} from './types/actions';
import {IMessage} from './types';

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
