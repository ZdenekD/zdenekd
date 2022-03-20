import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/mocks/__test__/nextRouterMock';
import Projects from '.';

describe('Pages/Projects', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Projects />);
        const component = findComponent(wrapper, 'component-projects');

        expect(component.exists()).toBe(true);
    });
});
