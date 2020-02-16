import {factoryStore, findComponent} from '../../__test__/utils/helpers';
import Footer from './index';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({route: '/'}))}));

describe('Footer', () => {
    const defaultProps = {menu: {isOpen: false}, app: {isAnimated: false}};

    it('renders without error', () => {
        const wrapper = factoryStore(Footer, defaultProps);
        const component = findComponent(wrapper, 'component-footer');

        expect(component.length).toBe(1);
    });
});
