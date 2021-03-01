import {shallow, ShallowWrapper} from 'enzyme';
import findComponent from '../../../../__test__/utils/helpers';
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
        const prev = findComponent(wrapper, 'component-prev');
        const next = findComponent(wrapper, 'component-next');

        expect(prev.exists()).toBe(true);
        expect(next.exists()).toBe(true);
    });
});
