import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../__test__/utils/helpers';
import Cursor from './index';

describe('Cursor', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Cursor />);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders inner cursor without error', () => {
        const component = findComponent(wrapper, 'component-inner-cursor');

        expect(component.exists()).toBe(true);
    });

    it('renders outer cursor without error', () => {
        const component = findComponent(wrapper, 'component-outer-cursor');

        expect(component.exists()).toBe(true);
    });
});
