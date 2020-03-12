import cursorReducer from './cursor/reducer';

export default ({cursor}, action) => ({cursor: cursorReducer(cursor, action)});
