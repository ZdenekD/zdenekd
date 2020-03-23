import React from 'react';
import PropTypes from 'prop-types';
import state from './state';

const stateContext = React.createContext();
const StateProvider = ({reducer, children}) => (
    <stateContext.Provider value={React.useReducer(reducer, {...state})}>
        {children}
    </stateContext.Provider>
);
const useStateValue = () => React.useContext(stateContext);

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
