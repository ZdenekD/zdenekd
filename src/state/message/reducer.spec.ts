import reducer from './reducer';
import IMessage from './type';
import initialState from './initialState';
import {setMessage, unsetMessage} from './actions';
import VariantsEnum from '../../enums/VariantsEnum';

describe('Message reducer', () => {
    it('change state on `setMessage` action', () => {
        const value: IMessage = {
            message: {
                variant: VariantsEnum.danger,
                content: 'Error message',
            },
        };
        const state = reducer(initialState, setMessage(value));

        expect(state).toEqual(value);
    });

    it('change to initial message state on `unsetMessage` action', () => {
        const value: IMessage = initialState;
        const state = reducer(initialState, unsetMessage());

        expect(state).toEqual(value);
    });
});
