import {factory, findComponent} from './utils/helpers';
import Error from '../pages/_error';

describe('Error page', () => {
    it('renders without error', () => {
        const wrapper = factory(Error);
        const component = findComponent(wrapper, 'component-error');

        expect(component.length).toBe(1);
    });

    it('renders status code from props', () => {
        const code = 500;
        const wrapper = factory(Error, {statusCode: code});
        const component = findComponent(wrapper, 'component-status');

        expect(component.text().includes(code)).toBe(true);
    });
});
