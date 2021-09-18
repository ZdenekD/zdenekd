import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/__test__/mocks/nextRouterMock';
import Header from '.';

describe('Header', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Header />);
        const component = findComponent(wrapper, 'component-header');

        expect(component.exists()).toBe(true);
    });
});
