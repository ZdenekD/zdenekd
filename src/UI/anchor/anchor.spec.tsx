import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../__test__/utils/helpers';
import Anchor from '.';

describe('Anchor', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Anchor href="#">content</Anchor>);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-anchor');

        expect(component.exists()).toBe(true);
    });

    it('has rel attribute if target is set', () => {
        const anchor = shallow(<Anchor href="/" target="_blank">content</Anchor>);
        const component = findComponent(anchor, 'component-anchor');

        expect(component.html().includes('rel')).toBe(true);
    });
});
