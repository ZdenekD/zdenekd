import {factoryStore, findComponent} from '../../../__test__/utils/helpers';
import Keys from './index';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({route: '/'}))}));

describe('Keys', () => {
    const defaultProps = {menu: {isOpen: false}, app: {isAnimated: false}};

    it('renders without error', () => {
        const wrapper = factoryStore(Keys, defaultProps);
        const component = findComponent(wrapper, 'component-keys');

        expect(component.exists()).toBe(true);
    });
});
