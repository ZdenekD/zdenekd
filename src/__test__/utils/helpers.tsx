import {shallow, ShallowWrapper} from 'enzyme';
import {Provider} from '../../state';

const findComponent = (wrapper: ShallowWrapper, attribute: string): ShallowWrapper => wrapper.find(`[data-test="${attribute}"]`);

export const stateFactory = (children: React.ReactNode): ShallowWrapper => {
    const wrapper = shallow(
        <Provider>
            {children}
        </Provider>
    );

    return wrapper;
};

export default findComponent;
