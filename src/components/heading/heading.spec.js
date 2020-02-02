import {factory, findComponent} from '../../__test__/utils/helpers';
import Heading from './index';

describe('Heading', () => {
    it('renders wihout error', () => {
        const title = 'Title';
        const wrapper = factory(Heading, {title});
        const component = findComponent(wrapper, 'component-heading');

        expect(component.length).toBe(1);
    });
});
