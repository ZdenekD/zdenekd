import React from 'react';
import PropTypes from 'prop-types';
import state from './state';

const stateContext = React.createContext();
const Provider = ({reducer, children}) => (
    <stateContext.Provider value={React.useReducer(reducer, {...state})}>
        {children}
    </stateContext.Provider>
);
const useStateValue = () => React.useContext(stateContext);

export default {Provider, useStateValue};

Provider.propTypes = {
    reducer: PropTypes.func,
    initialState: PropTypes.shape({}),
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.number,
    ]),
};
