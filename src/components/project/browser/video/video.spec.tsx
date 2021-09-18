import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/__test__/mocks/nextRouterMock';
import {IProject} from '@/data/projects';
import Video from '.';

const project: IProject = {
    id: 'id',
    title: 'title',
    locale: {cs: {description: 'description'}},
    url: 'http://url',
    tools: ['tool', 'tool'],
};

describe('Project/Browser/Video', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Video project={project} />);
        const component = findComponent(wrapper, 'component-video');

        expect(component.exists()).toBe(true);
    });
});
