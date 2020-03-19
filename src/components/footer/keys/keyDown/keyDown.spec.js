import {factoryState, findComponent} from '../../../../__test__/utils/helpers';
import KeyDown from './index';
import data from '../../../../data/pages';

describe('Key Down', () => {
    const defaultProps = {data, router: {route: '/'}};
    let wrapper;

    beforeEach(() => {
        wrapper = factoryState(KeyDown, defaultProps);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-key');

        expect(component.exists()).toBe(true);
    });
});
