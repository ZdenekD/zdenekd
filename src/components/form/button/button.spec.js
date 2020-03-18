import {factory, findComponent} from '../../../__test__/utils/helpers';
import Button from './index';

describe('Button', () => {
    const defaultProps = {children: ''};

    it('renders without error', () => {
        const wrapper = factory(Button, defaultProps);
        const component = findComponent(wrapper, 'component-button');

        expect(component.exists()).toBe(true);
    });
});
