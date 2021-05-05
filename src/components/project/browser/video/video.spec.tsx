import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../../../__test__/utils/helpers';
import '../../../../__test__/mocks/routerMock';
import {IProject} from '../../../../data/projects';
import Video from '.';

const project: IProject = {
    id: 'id',
    title: 'title',
    locale: {cs: {description: 'description'}},
    url: 'http://url',
    tools: ['tool', 'tool'],
};

describe('Video', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Video project={project} />);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-video');

        expect(component.exists()).toBe(true);
    });
});
