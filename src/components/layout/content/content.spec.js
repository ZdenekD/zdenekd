import {factory, findComponent} from '../../../../__tests__/utils/helpers';
import Content from './index';

describe('Content', () => {
    it('renders wihout error', () => {
        const title = 'Title';
        const wrapper = factory(Content, {title});
        const component = findComponent(wrapper, 'component-content');

        expect(component.length).toBe(1);
    });
});
