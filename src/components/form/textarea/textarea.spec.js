import {factory, findComponent} from '../../../__test__/utils/helpers';
import Textarea from './index';

describe('Textarea', () => {
    const defaultProps = {
        handleChange: jest.fn(),
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

    it('renders label text from props', () => {
        const label = 'Content text';
        const props = {
            handleChange: jest.fn(),
            label,
        };
        const container = factory(Textarea, props);
        const component = findComponent(container, 'component-label');

        expect(component.text().includes(label)).toBe(true);
    });
});
