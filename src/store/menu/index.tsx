import React from 'react';
import Provider from '../utils/provider';
import {dispatcher} from './actions';
import initialState from './initialState';
import reducer from './reducer';
import {IMenu} from './types';
import {IActions} from './types/actions';

type IContext = [IMenu, IActions | Record<string, never>];

type IProps = {
    children: React.ReactNode
}

const Context = React.createContext<IContext>([initialState, {}]);
const props = {
    Context,
    initialState,
    reducer,
    dispatcher,
};
const MenuProvider: React.FC<IProps> = ({children}) => (
    <Provider {...props}>
        {children}
    </Provider>
);
const useMenuState = (): IContext => React.useContext(Context);

export {
    MenuProvider,
    useMenuState
};
