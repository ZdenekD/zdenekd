import {factory, findComponent} from '../../../../__test__/utils/helpers';
import Aside from './index';

describe('Aside', () => {
    it('renders wihout error', () => {
        const wrapper = factory(Aside);
        const component = findComponent(wrapper, 'component-aside');

        expect(component.length).toBe(1);
    });
});
