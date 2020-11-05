import cursorReducer from './cursor/reducer';

const reducer = ({cursor}, action) => ({cursor: cursorReducer(cursor, action)});

export default reducer;
