import React, {createContext, useContext, useReducer} from 'react';
import PropTypes from 'prop-types';
import state from './state';

const StateContext = createContext();
const StateProvider = ({reducer, children}) => (
    <StateContext.Provider value={useReducer(reducer, {...state})}>
        {children}
    </StateContext.Provider>
);
const useStateValue = () => useContext(StateContext);

export default {StateProvider, useStateValue};

StateProvider.propTypes = {
    reducer: PropTypes.func,
    initialState: PropTypes.shape({}),
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.number,
    ]),
};
