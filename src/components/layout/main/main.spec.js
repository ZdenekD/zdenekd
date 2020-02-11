import {factoryStore, findComponent} from '../../../__test__/utils/helpers';
import Main from './index';
import data from '../../../data/pages';
import {getPage} from '../../../helpers/getPage';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({route: '/'}))}));

describe('Main', () => {
    const defaultProps = {app: {isAnimated: false}};

    it('renders appropriate title value', () => {
        const wrapper = factoryStore(Main, defaultProps);
        const component = findComponent(wrapper, 'component-title');
        const [page] = getPage('/');
        const heading = data[page].title;

        expect(component.text().includes(heading)).toBe(true);
    });
});
