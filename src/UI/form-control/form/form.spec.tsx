import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../../__test__/utils/helpers';
import Form from '.';

describe('Form', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Form />);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders wihout error', () => {
        const component = findComponent(wrapper, 'component-form');

        expect(component.exists()).toBe(true);
    });
});
