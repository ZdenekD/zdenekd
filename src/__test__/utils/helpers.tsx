import {
    mount,
    ReactWrapper,
    ShallowWrapper
} from 'enzyme';
import {Provider} from '../../store';

type IWrapper = ShallowWrapper | ReactWrapper;

const findComponent = (wrapper: IWrapper, attribute: string): IWrapper => wrapper.find(`[data-test="${attribute}"]`);

export const stateFactory = (children: React.ReactNode): IWrapper => {
    const wrapper = mount(
        <Provider>
            {children}
        </Provider>
    );

    return wrapper;
};

export default findComponent;
