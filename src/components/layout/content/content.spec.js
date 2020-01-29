import {factory, findComponent} from '../../../../__tests__/utils/helpers';
import Content from './index';

describe('Content', () => {
    it('renders wihout error', () => {
        const wrapper = factory(Content);
        const component = findComponent(wrapper, 'component-content');

        expect(component.length).toBe(1);
    });
});
