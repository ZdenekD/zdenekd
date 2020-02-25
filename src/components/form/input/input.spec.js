import {factory, findComponent} from '../../../__test__/utils/helpers';
import Input from './index';

describe('Input', () => {
    const defaultProps = {
        handleChange: jest.fn(),
        handleBlur: jest.fn(),
        hasError: false,
        label: '',
    };
    let wrapper;

    beforeEach(() => {
        wrapper = factory(Input, defaultProps);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-input');

        expect(component.exists()).toBe(true);
    });

    it('renders label without error', () => {
        const component = findComponent(wrapper, 'component-label');

        expect(component.exists()).toBe(true);
    });

    it('calls `handleBlur` on element blur event', () => {
        const component = findComponent(wrapper, 'component-input');

        component.simulate('blur');

        expect(defaultProps.handleBlur).toHaveBeenCalled();
    });

    it('calls `handleChange` on element change event', () => {
        const component = findComponent(wrapper, 'component-input');

        component.simulate('change');

        expect(defaultProps.handleChange).toHaveBeenCalled();
    });

    it('renders label text from props', () => {
        const label = 'Content text';
        const props = {
            handleChange: jest.fn(),
            handleBlur: jest.fn(),
            hasError: false,
            label,
        };
        const container = factory(Input, props);
        const component = findComponent(container, 'component-label');

        expect(component.text().includes(label)).toBe(true);
    });
});
