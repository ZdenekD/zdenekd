import {factory, findComponent} from '../../../../__tests__/utils/helpers';
import Main from './index';

describe('Main', () => {
    it('renders wihout error', () => {
        const wrapper = factory(Main);
        const component = findComponent(wrapper, 'component-main');

        expect(component.length).toBe(1);
    });
});
