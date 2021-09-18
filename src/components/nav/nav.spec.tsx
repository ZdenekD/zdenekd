import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/__test__/mocks/nextRouterMock';
import pages from '@/data/pages';
import Nav from '.';

describe('Nav', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Nav />);
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-nav');

        expect(component.exists()).toBe(true);
    });

    it('renders all pages links', () => {
        const {length} = Object.keys(pages);
        const component = findComponent(wrapper, 'component-item');

        expect(component.length).toBe(length);
    });
});
