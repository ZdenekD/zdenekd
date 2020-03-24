import {factory, findComponent} from '../../__test__/utils/helpers';
import Loader from './index';

describe('Loader', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = factory(Loader);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-loader');

        expect(component.exists()).toBe(true);
    });
});
