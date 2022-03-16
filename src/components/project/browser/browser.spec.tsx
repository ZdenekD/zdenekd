import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/mocks/__test__/nextRouterMock';
import {IProject} from '@/data/projects';
import Browser from '.';

const project: IProject = {
    id: 'id',
    title: 'title',
    locale: {cs: {description: 'description'}},
    url: 'http://url',
    tools: ['tool', 'tool'],
};

describe('Project/Browser', () => {
    it('renders without error', () => {
        const wrapper = shallow(
            <Browser
                isFirst={false}
                isLast={false}
                project={project}
            />
        );
        const component = findComponent(wrapper, 'component-browser');

        expect(component.exists()).toBe(true);
    });
});
