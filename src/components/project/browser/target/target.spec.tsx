import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/__test__/mocks/nextRouterMock';
import Target from '.';

describe('Project/Browser/Target', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Target url="http://url" />);
        const component = findComponent(wrapper, 'component-target');

        expect(component.exists()).toBe(true);
    });
});
