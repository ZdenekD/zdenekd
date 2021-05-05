import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../../__test__/utils/helpers';
import '../../../__test__/mocks/routerMock';
import Tools from '.';

const items = ['string1', 'string2'];

describe('Tools', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Tools items={items} />);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-tools');

        expect(component.exists()).toBe(true);
    });
});
