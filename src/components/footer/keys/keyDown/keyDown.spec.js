import {factory, findComponent} from '../../../../__test__/utils/helpers';
import KeyDown from './index';
import data from '../../../../data/pages';

describe('Key Down', () => {
    const defaultProps = {data, router: {route: '/'}};

    it('renders without error', () => {
        const wrapper = factory(KeyDown, defaultProps);
        const component = findComponent(wrapper, 'component-key');

        expect(component.exists()).toBe(true);
    });
});
