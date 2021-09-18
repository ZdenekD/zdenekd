import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import Aside from '.';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({route: '/'}))}));

describe('Aside', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Aside />);
        const component = findComponent(wrapper, 'component-aside');

        expect(component.exists()).toBe(true);
    });
});
