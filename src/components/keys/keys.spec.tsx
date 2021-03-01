import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../__test__/utils/helpers';
import Keys from '.';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({pathname: '/'}))}));

describe('Keys', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Keys />);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-keys');

        expect(component.exists()).toBe(true);
    });
});
