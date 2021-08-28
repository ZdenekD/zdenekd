import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import Curtain from '.';

describe('Curtain', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Curtain />);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-curtain');

        expect(component.exists()).toBe(true);
    });
});
