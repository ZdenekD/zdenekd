import {factoryStore, findComponent} from '../../__test__/utils/helpers';
import Aside from './index';
import data from '../../data/pages';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({asPath: '/'}))}));

describe('Aside', () => {
    const defaultProps = {menu: {isOpen: false, isAnimated: false}};
    let wrapper;

    beforeEach(() => {
        wrapper = factoryStore(Aside, defaultProps);
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-aside');

        expect(component.length).toBe(1);
    });

    it('renders navigation without error', () => {
        const component = findComponent(wrapper, 'component-navigation');

        expect(component.length).toBe(1);
    });

    it('renders all pages links', () => {
        const {length} = Object.keys(data);
        const component = findComponent(wrapper, 'component-link');

        expect(component.length).toBe(length);
    });
});
