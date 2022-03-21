import {shallow} from 'enzyme';
import findComponent from '@/__test__/utils/helpers';
import DirectionsEnum from '@/enums/DirectionsEnum';
import Key from '.';

describe('Keys/Key', () => {
    it('renders without error', () => {
        const wrapper = shallow(
            <Key
                direction={DirectionsEnum.down}
                label="Down"
            />
        );
        const component = findComponent(wrapper, 'component-key');

        expect(component.exists()).toBe(true);
    });
});
