import {factory, findComponent} from '../../../__test__/utils/helpers';
import Textarea from './index';

describe('Textarea', () => {
    const defaultProps = {
        handleChange: jest.fn(),
        handleBlur: jest.fn(),
        hasError: false,
        label: '',
    };
    let wrapper;

    beforeEach(() => {
        wrapper = factory(Textarea, defaultProps);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-textarea');

        expect(component.exists()).toBe(true);
    });

    it('renders label without error', () => {
        const component = findComponent(wrapper, 'component-label');

        expect(component.exists()).toBe(true);
    });

    it('calls `handleBlur` on element blur event', () => {
        const component = findComponent(wrapper, 'component-textarea');

        component.simulate('blur');

        expect(defaultProps.handleBlur).toHaveBeenCalled();
    });

    it('calls `handleChange` on element change event', () => {
        const component = findComponent(wrapper, 'component-textarea');

        component.simulate('change', {target: {value: 0}});

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
        const container = factory(Textarea, props);
        const component = findComponent(container, 'component-label');

        expect(component.text().includes(label)).toBe(true);
    });
});
