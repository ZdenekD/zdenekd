import {factory, findComponent, checkProps} from '../../__test__/utils/helpers';
import Aside from './index';

describe('Aside', () => {
    const defaultProps = {isMenu: false, handleMenu: () => {}};

    it('does not throw warning with expected props', () => {
        const check = checkProps(Aside, defaultProps);

        expect(check).toBeUndefined();
    });

    it('renders wihout error', () => {
        const wrapper = factory(Aside, defaultProps);
        const component = findComponent(wrapper, 'component-aside');

        expect(component.length).toBe(1);
    });
});
