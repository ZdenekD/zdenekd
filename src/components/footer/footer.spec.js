import {factoryStore, findComponent} from '../../__test__/utils/helpers';
import Footer from './index';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({route: '/'}))}));

describe('Footer', () => {
    const defaultProps = {menu: {isOpen: false}, app: {isAnimated: false}};
    let wrapper;

    beforeEach(() => {
        wrapper = factoryStore(Footer, {}, defaultProps);
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-footer');

        expect(component.exists()).toBe(true);
    });
});
