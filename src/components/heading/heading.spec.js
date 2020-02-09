import {factoryStore, findComponent} from '../../__test__/utils/helpers';
import Heading from './index';
import data from '../../data/pages';
import getPage from '../../helpers/getPage';

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
        const [page] = getPage('/');
        const heading = data[page].title;

        expect(component.text().includes(heading)).toBe(true);
    });
});
