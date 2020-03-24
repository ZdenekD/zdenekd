import {factoryStore, findComponent} from '../../__test__/utils/helpers';
import Project from './index';

describe('Project', () => {
    it('renders without error', () => {
        const wrapper = factoryStore(Project);
        const component = findComponent(wrapper, 'component-project');

        expect(component.exists()).toBe(true);
    });
});
