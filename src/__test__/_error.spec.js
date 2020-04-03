import {factory, findComponent} from './utils/helpers';
import Error from '../pages/_error';

describe('Error page', () => {
    it('renders without error', () => {
        const wrapper = factory(Error);
        const component = findComponent(wrapper, 'component-error');

        expect(component.exists()).toBe(true);
    });
});
