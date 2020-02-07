import {factory, findComponent, checkProps} from '../../__test__/utils/helpers';
import Menu from './index';

describe('Menu', () => {
    const defaultProps = {isMenu: false, handleMenu: () => {}};

    it('does not throw warning with expected props', () => {
        const check = checkProps(Menu, defaultProps);

        expect(check).toBeUndefined();
    });

    it('renders without error', () => {
        const wrapper = factory(Menu, defaultProps);
        const component = findComponent(wrapper, 'component-menu');

        expect(component.length).toBe(1);
    });
});
