import {factory, findComponent} from '../../../__test__/utils/helpers';
import Main from './index';
import data from '../../../data/pages';
import getPages from '../../../helpers/getPage';

jest.mock('next/router', () => ({useRouter: jest.fn().mockImplementation(() => ({asPath: '/'}))}));

describe('Main', () => {
    it('renders appropriate title value', () => {
        const wrapper = factory(Main);
        const component = findComponent(wrapper, 'component-title');
        const [page] = getPages('/');
        const heading = data[page].title;

        expect(component.text().includes(heading)).toBe(true);
    });
});
