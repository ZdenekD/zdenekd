import {factoryStore, findComponent} from '../../__test__/utils/helpers';
import Menu from './index';

describe('Menu', () => {
    const defaultProps = {menu: {isOpen: false, handleMenu: () => {}}};

    it('renders without error', () => {
        const wrapper = factoryStore(Menu, defaultProps);
        const component = findComponent(wrapper, 'component-menu');

        expect(component.length).toBe(1);
    });
});
