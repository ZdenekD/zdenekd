import {factoryState, findComponent} from '../../../../__test__/utils/helpers';
import KeyLeft from './index';

describe('Key Left', () => {
    const defaultProps = {setProject: jest.fn()};
    let wrapper;

    beforeEach(() => {
        wrapper = factoryState(KeyLeft, defaultProps);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-key');

        expect(component.exists()).toBe(true);
    });

    it('triggers project handler', () => {
        const component = findComponent(wrapper, 'component-key');
        const value = {handlePrev: true};

        component.simulate('click');

        expect(defaultProps.setProject).toHaveBeenCalledWith(value);
    });
});
