import {factory, findComponent} from './utils/helpers';
import Homepage from '../pages/index';

describe('Homepage page', () => {
    it('renders without error', () => {
        const site = 'homepage';
        const wrapper = factory(Homepage, {site});
        const component = findComponent(wrapper, 'component-main');

        expect(component.length).toBe(1);
    });
});
