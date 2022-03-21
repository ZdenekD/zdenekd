import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/mocks/__test__/nextRouterMock';
import Addressbar from '.';

describe('Project/Browser/Addressbar', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Addressbar url="http://url" />);
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-addressbar');

        expect(component.exists()).toBe(true);
    });

    it('does not render link if url contains `in.progress`', () => {
        const url = 'http://project.in.progress';
        const container = shallow(<Addressbar url={url} />);
        const component = findComponent(container, 'component-addressbar-link');

        expect(component.exists()).toBe(false);
    });
});
