import animationState from './animation/initialState';
import cursorState from './cursor/initialState';
import menuState from './menu/initialState';
import messageState from './message/initialState';
import projectState from './project/initialState';

export default {
    ...animationState,
    ...cursorState,
    ...menuState,
    ...messageState,
    ...projectState,
};
