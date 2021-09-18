import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/__test__/mocks/nextRouterMock';
import Keys from '.';

describe('Keys', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Keys />);
        const component = findComponent(wrapper, 'component-keys');

        expect(component.exists()).toBe(true);
    });
});
