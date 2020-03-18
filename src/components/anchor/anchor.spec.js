import {factory, findComponent} from '../../__test__/utils/helpers';
import Anchor from './index';

describe('Anchor', () => {
    const defaultProps = {href: '/', children: ''};

    it('renders without error', () => {
        const wrapper = factory(Anchor, defaultProps);
        const component = findComponent(wrapper, 'component-anchor');

        expect(component.exists()).toBe(true);
    });

    // it('set `isPrepared` state', () => {
    //     const mockSetPrepared = jest.fn();

    //     React.useState = jest.fn(() => ['', mockSetPrepared]);

    //     const wrapper = mount(<Anchor {...defaultProps} />);

    //     wrapper.render();

    //     expect(mockSetPrepared).toHaveBeenCalledWith(true);
    // });
});
