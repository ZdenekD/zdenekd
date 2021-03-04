import React from 'react';
import initialState from './initialState';
import reducer from './reducer';
import IState from './type/state';
import IAction from './type/actions';

interface IContext {
    state: IState
    dispatch: React.Dispatch<IAction>
}

const StateContext = React.createContext<IContext>({state: initialState, dispatch: () => null});

const Provider: React.FC = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <StateContext.Provider value={{state, dispatch}}>
            {children}
        </StateContext.Provider>
    );
};
const useStateValue = (): IContext => React.useContext(StateContext);

export {
    Provider,
    StateContext,
    useStateValue
};
