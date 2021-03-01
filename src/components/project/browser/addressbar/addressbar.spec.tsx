import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../../../__test__/utils/helpers';
import Addressbar from '.';

describe('Addressbar', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Addressbar url="http://url" />);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-addressbar');

        expect(component.exists()).toBe(true);
    });
});
