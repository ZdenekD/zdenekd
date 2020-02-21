import {factory, findComponent} from '../../__test__/utils/helpers';
import Content from './index';

describe('Content', () => {
    it('renders without error', () => {
        const wrapper = factory(Content);
        const component = findComponent(wrapper, 'component-content');

        expect(component.exists()).toBe(true);
    });
});
