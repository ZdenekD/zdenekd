import {shallow} from 'enzyme';
import findComponent from '../../../__test__/utils/helpers';
import Image from '.';

describe('Image', () => {
    it('match snapshot', () => {
        const wrapper = shallow(<Image src="/path/to/image.jpg" type="webp, avif" />);

        expect(wrapper.html()).toMatchSnapshot();
    });

    it('renders without error', () => {
        const wrapper = shallow(<Image src="/path/to/image.jpg" />);
        const component = findComponent(wrapper, 'component-image');

        expect(component.exists()).toBe(true);
    });

    it('renders `webp` source', () => {
        const wrapper = shallow(<Image src="/path/to/image.jpg" type="webp" />);
        const component = findComponent(wrapper, 'component-image-webp');

        expect(component.exists()).toBe(true);
    });

    it('renders `avif` source', () => {
        const wrapper = shallow(<Image src="/path/to/image.jpg" type="avif" />);
        const component = findComponent(wrapper, 'component-image-avif');

        expect(component.exists()).toBe(true);
    });
});
