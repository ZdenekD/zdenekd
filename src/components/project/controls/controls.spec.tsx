import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import '@/__test__/mocks/nextRouterMock';
import Controls from '.';

describe('Project/Controls', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Controls
                isFirst={false}
                isLast={false}
            />
        );
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-controls');

        expect(component.exists()).toBe(true);
    });

    it('triggers handlePrev function on prev button click', () => {
        const mockFunction = jest.fn();
        const container = shallow(
            <Controls
                isFirst={false}
                isLast={false}
                handlePrev={mockFunction}
            />
        );
        const component = findComponent(container, 'component-controls-prev');

        component.simulate('click');

        expect(mockFunction).toHaveBeenCalled();
    });

    it('triggers handleNext function on next button click', () => {
        const mockFunction = jest.fn();
        const container = shallow(
            <Controls
                isFirst={false}
                isLast={false}
                handleNext={mockFunction}
            />
        );
        const component = findComponent(container, 'component-controls-next');

        component.simulate('click');

        expect(mockFunction).toHaveBeenCalled();
    });
});
