import {shallow, ShallowWrapper} from 'enzyme';
import DirectionsEnum from '@/utils/enums/DirectionsEnum';
import findComponent from '@/__test__/utils/helpers';
import Key from '.';

describe('Key', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Key
                direction={DirectionsEnum.down}
                label="Down"
            />
        );
    });

    it('match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const component = findComponent(wrapper, 'component-key');

        expect(component.exists()).toBe(true);
    });
});
