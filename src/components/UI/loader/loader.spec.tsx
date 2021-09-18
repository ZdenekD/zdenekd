import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import Loader from './index';

describe('Loader', () => {
    it('renders without error', () => {
        const wrapper = shallow(<Loader />);
        const component = findComponent(wrapper, 'component-loader');

        expect(component.exists()).toBe(true);
    });
});
