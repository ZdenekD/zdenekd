import React from 'react';
import initialState from './initialState';
import reducer from './reducer';
import IState from './type/state';
import IAction from './type/actions';

type IContext = [IState, React.Dispatch<IAction>];

const StateContext = React.createContext<IContext>([initialState, () => null]);
const Provider: React.FC = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={[state, dispatch]}>
            {children}
        </StateContext.Provider>
    );
};
const useGlobalState = (): IContext => React.useContext(StateContext);

export {
    Provider,
    StateContext,
    useGlobalState
};
