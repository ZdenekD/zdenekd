import {factoryStore, findComponent} from '../../__test__/utils/helpers';
import Heading from './index';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({asPath: '/'}))}));

describe('Heading', () => {
    const defaultProps = {menu: {isOpen: false, isAnimated: false}};
    let wrapper;

    beforeEach(() => {
        wrapper = factoryStore(Heading, defaultProps);
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-heading');

        expect(component.length).toBe(1);
    });

    it('renders appropriate heading title', () => {
        const component = findComponent(wrapper, 'component-title');
        const heading = 'Kávová paráda';

        expect(component.text().includes(heading)).toBe(true);
    });
});
