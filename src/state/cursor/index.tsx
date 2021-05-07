import React from 'react';
import Provider from '../provider';
import initialState from './initialState';
import reducer from './reducer';
import {dispatcher} from './actions';
import {ICursor} from './type';
import {IActions} from './type/actions';

type IContext = [ICursor, IActions | Record<string, never>];

const Context = React.createContext<IContext>([initialState, {}]);
const props = {
    Context,
    initialState,
    reducer,
    dispatcher,
};
const CursorProvider: React.FC = ({children}) => (
    <Provider {...props}>
        {children}
    </Provider>
);
const useCursorState = (): IContext => React.useContext(Context);

export {
    CursorProvider,
    useCursorState
};
