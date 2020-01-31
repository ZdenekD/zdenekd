import {factory, findComponent} from '../../../../__test__/utils/helpers';
import Header from './index';

describe('Header', () => {
    it('renders wihout error', () => {
        const title = 'Title';
        const wrapper = factory(Header, {title});
        const component = findComponent(wrapper, 'component-header');

        expect(component.length).toBe(1);
    });
});
