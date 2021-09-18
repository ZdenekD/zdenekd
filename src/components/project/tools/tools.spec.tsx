import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/__test__/mocks/nextRouterMock';
import Tools from '.';

const items = ['string1', 'string2'];

describe('Project/Tools', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Tools items={items} />);
        const component = findComponent(wrapper, 'component-tools');

        expect(component.exists()).toBe(true);
    });
});
