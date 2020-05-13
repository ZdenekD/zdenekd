import {factory, findComponent} from './utils/helpers';
import Error from '../pages/404';

describe('404 page', () => {
    it('renders without error', () => {
        const wrapper = factory(Error);
        const component = findComponent(wrapper, 'component-error');

        expect(component.exists()).toBe(true);
    });
});
