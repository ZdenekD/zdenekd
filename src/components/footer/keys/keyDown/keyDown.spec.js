import {factoryState, findComponent} from '../../../../__test__/utils/helpers';
import KeyDown from './index';
import data from '../../../../data/pages';

describe('Key Down', () => {
    const defaultProps = {data, router: {route: '/'}};
    let wrapper;

    beforeEach(() => {
        wrapper = factoryState(KeyDown, defaultProps);
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-key');

        expect(component.exists()).toBe(true);
    });

    it('triggers next page router', () => {
        const route = data[Object.keys(data)[0]].link;
        const value = data[Object.keys(data)[1]].link;
        const props = {
            data,
            router: {
                route,
                push: jest.fn(),
            },
        };
        const key = factoryState(KeyDown, props);
        const component = findComponent(key, 'component-key');

        component.simulate('click');

        expect(props.router.push).toHaveBeenCalledWith(value);
    });

    it('does not call next page on last one', () => {
        const {length} = Object.keys(data);
        const route = data[Object.keys(data)[length - 1]].link;
        const props = {
            data,
            router: {
                route,
                push: jest.fn(),
            },
        };
        const key = factoryState(KeyDown, props);
        const component = findComponent(key, 'component-key');

        component.simulate('click');

        expect(props.router.push).not.toHaveBeenCalled();
    });
});
