import {factoryState, findComponent} from '../../../../__test__/utils/helpers';
import KeyLeft from './index';

describe('Key Left', () => {
    const defaultProps = {project: {current: 0, setProject: jest.fn()}};
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
});
