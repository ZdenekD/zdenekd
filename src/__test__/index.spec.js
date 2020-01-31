import {factory, findComponent} from '../../__test__/utils/helpers';
import Homepage from '../pages/index';

describe('Homepage page', () => {
    it('renders wihout error', () => {
        const site = 'homepage';
        const wrapper = factory(Homepage, {site});
        const component = findComponent(wrapper, 'component-main');

        expect(component.length).toBe(1);
    });
});
