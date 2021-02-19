import {initialState as cursorState} from './cursor/type';
import {initialState as menuState} from './menu/type';
import {initialState as messageState} from './message/type';

export default {
    ...cursorState,
    ...menuState,
    ...messageState,
};
