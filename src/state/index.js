import React, {createContext, useContext, useReducer} from 'react';
import PropTypes from 'prop-types';
import state from './state';

export const StateContext = createContext();

export const StateProvider = ({reducer, children}) => (
    <StateContext.Provider value={useReducer(reducer, {...state})}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

StateProvider.propTypes = {
    reducer: PropTypes.func,
    initialState: PropTypes.shape({}),
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.number,
    ]),
};
