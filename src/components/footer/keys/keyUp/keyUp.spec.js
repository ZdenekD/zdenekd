import {factoryState, findComponent} from '../../../../__test__/utils/helpers';
import KeyUp from './index';
import data from '../../../../data/pages';

describe('Key Up', () => {
    const defaultProps = {data, router: {route: '/'}};
    let wrapper;

    beforeEach(() => {
        wrapper = factoryState(KeyUp, defaultProps);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-key');

        expect(component.exists()).toBe(true);
    });

    it('triggers previous page router', () => {
        const route = data[Object.keys(data)[1]].link;
        const value = data[Object.keys(data)[0]].link;
        const props = {
            data,
            router: {
                route,
                push: jest.fn(),
            },
        };
        const key = factoryState(KeyUp, props);
        const component = findComponent(key, 'component-key');

        component.simulate('click');

        expect(props.router.push).toHaveBeenCalledWith(value);
    });

    it('does not call previous page on first one', () => {
        const route = data[Object.keys(data)[0]].link;
        const props = {
            data,
            router: {
                route,
                push: jest.fn(),
            },
        };
        const key = factoryState(KeyUp, props);
        const component = findComponent(key, 'component-key');

        component.simulate('click');

        expect(props.router.push).not.toHaveBeenCalled();
    });
});
