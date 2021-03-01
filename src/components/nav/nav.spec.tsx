import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../__test__/utils/helpers';
import Nav from '.';
import pages from '../../data/pages';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({route: '/'}))}));

describe('Navigation', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Nav />);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-nav');

        expect(component.exists()).toBe(true);
    });

    it('renders all pages links', () => {
        const {length} = Object.keys(pages);
        const component = findComponent(wrapper, 'component-item');

        expect(component.length).toBe(length);
    });
});
