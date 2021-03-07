import reducer from './reducer';
import IAnimation, {initialState} from './type';
import setAnimation from './actions';

describe('Animation reducer', () => {
    it('change state on `setAnimation` action', () => {
        const value: IAnimation = {animation: {isAsideAnimated: true}};
        const state = reducer(initialState, setAnimation(value));

        expect(state).toEqual(value);
    });
});
