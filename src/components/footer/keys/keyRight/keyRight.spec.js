import {factoryState, findComponent} from '../../../../__test__/utils/helpers';
import KeyRight from './index';

describe('Key Right', () => {
    const defaultProps = {project: {current: 0, setProject: jest.fn()}};
    let wrapper;

    beforeEach(() => {
        wrapper = factoryState(KeyRight, defaultProps);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-key');

        expect(component.exists()).toBe(true);
    });
});
