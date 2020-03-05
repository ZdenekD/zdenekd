import {factory, findComponent} from '../../__test__/utils/helpers';
import Form from './index';

describe('Form', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = factory(Form);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-form');

        expect(component.exists()).toBe(true);
    });
});
