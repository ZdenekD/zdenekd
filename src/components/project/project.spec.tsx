import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/mocks/__test__/nextRouterMock';
import Project from '.';

describe('Project', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Project />);
        const component = findComponent(wrapper, 'component-project');

        expect(component.exists()).toBe(true);
    });
});
