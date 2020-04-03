import {factoryState, findComponent} from '../../../__test__/utils/helpers';
import Button from './index';

describe('Button', () => {
    const defaultProps = {children: ''};
    let wrapper;

    beforeEach(() => {
        wrapper = factoryState(Button, defaultProps);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-button');

        expect(component.exists()).toBe(true);
    });
});
