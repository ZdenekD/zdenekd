import {factory, findComponent} from '../../../../__test__/utils/helpers';
import KeyUp from './index';
import data from '../../../../data/pages';

describe('Key Up', () => {
    const defaultProps = {data, router: {route: '/'}};

    it('renders without error', () => {
        const wrapper = factory(KeyUp, defaultProps);
        const component = findComponent(wrapper, 'component-key');

        expect(component.exists()).toBe(true);
    });
});
