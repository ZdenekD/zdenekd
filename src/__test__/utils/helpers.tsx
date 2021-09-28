import {
    mount,
    ReactWrapper,
    ShallowWrapper
} from 'enzyme';
import {Provider} from '../../store';

type IWrapper = ReactWrapper | ShallowWrapper;

const findComponent = (wrapper: IWrapper, attribute: string): IWrapper => wrapper.find(`[data-test="${attribute}"]`);

export const storeFactory = (children: React.ReactNode): IWrapper => {
    const wrapper = mount(
        <Provider>
            {children}
        </Provider>
    );

    return wrapper;
};

export default findComponent;
