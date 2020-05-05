import {getStore} from '../../__test__/utils/helpers';
import {handleAppAnimation} from './actions';

describe('App', () => {
    const defaultProps = {app: {isAnimated: false}};

    it('handle app animation action', () => {
        const store = getStore(defaultProps);
        const value = {isAnimated: true};

        store.dispatch(handleAppAnimation(value));

        const {app} = store.getState();

        expect(app).toEqual(value);
    });
});
