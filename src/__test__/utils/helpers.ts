import {ShallowWrapper} from 'enzyme';

const findComponent = (wrapper: ShallowWrapper, attribute: string): ShallowWrapper => wrapper.find(`[data-test="${attribute}"]`);

export default findComponent;
