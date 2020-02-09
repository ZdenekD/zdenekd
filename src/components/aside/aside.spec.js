import {factoryStore, findComponent} from '../../__test__/utils/helpers';
import Aside from './index';

describe('Aside', () => {
    const defaultProps = {menu: {isOpen: false}};

    it('renders without error', () => {
        const wrapper = factoryStore(Aside, defaultProps);
        const component = findComponent(wrapper, 'component-aside');

        expect(component.length).toBe(1);
    });
});
