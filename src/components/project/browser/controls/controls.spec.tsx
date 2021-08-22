import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../../../__test__/utils/helpers';
import '../../../../__test__/mocks/nextRouterMock';
import Controls from '.';

describe('Controls', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Controls
                isFirst={false}
                isLast={false}
            />
        );
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const prev = findComponent(wrapper, 'component-controls-prev');
        const next = findComponent(wrapper, 'component-controls-next');

        expect(prev.exists()).toBe(true);
        expect(next.exists()).toBe(true);
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
