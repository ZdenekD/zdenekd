import {factory, findComponent} from '../../../__tests__/utils/helpers';
import Navigation from './index';
import DATA from '../../data/pages';

describe('Navigation', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = factory(Navigation);
    });

    it('renders wihout error', () => {
        const component = findComponent(wrapper, 'component-navigation');

        expect(component.length).toBe(1);
    });

    it('renders all pages links', () => {
        const {length} = Object.keys(DATA);
        const component = findComponent(wrapper, 'component-link');

        expect(component.length).toBe(length);
    });
});
