import {initialState as cursorState} from './cursor/type';
import {initialState as menuState} from './menu/type';
import {initialState as messageState} from './message/type';
import {initialState as projectState} from './project/type';

export default {
    ...cursorState,
    ...menuState,
    ...messageState,
    ...projectState,
};
