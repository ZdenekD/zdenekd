import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../../__test__/utils/helpers';
import '../../../__test__/mocks/nextRouterMock';
import {IProject} from '../../../data/projects';
import Browser from '.';

const project: IProject = {
    id: 'id',
    title: 'title',
    locale: {cs: {description: 'description'}},
    url: 'http://url',
    tools: ['tool', 'tool'],
};

describe('Browser', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Browser
                isFirst={false}
                isLast={false}
                project={project}
            />
        );
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-browser');

        expect(component.exists()).toBe(true);
    });
});
