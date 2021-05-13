/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {IActions} from './type/actions';
import {IAction} from './type/action';
import {IState} from './type/state';

interface IProvider {
    Context: any
    reducer: any
    initialState: IState
    dispatcher: (dispatch: React.Dispatch<IAction>) => IActions
}

const Provider: React.FC<IProvider> = ({
    children,
    Context,
    reducer,
    initialState,
    dispatcher,
}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const actions = dispatcher(dispatch);
    const value = React.useMemo(() => [state, actions], [state, actions]);

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export default Provider;
