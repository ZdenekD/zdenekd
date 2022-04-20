import React from 'react';
import Provider from '../utils/provider';
import {dispatcher} from './actions';
import initialState from './initialState';
import reducer from './reducer';
import {ICursor} from './types';
import {IActions} from './types/actions';

type IContext = [ICursor, IActions];

type IProps = {
    children: React.ReactNode
}

const Context = React.createContext<IContext>([
    initialState, {
        setCursor: () => undefined,
        unsetCursor: () => undefined,
    },
]);
const props = {
    Context,
    initialState,
    reducer,
    dispatcher,
};
const CursorProvider: React.FC<IProps> = ({children}) => (
    <Provider {...props}>
        {children}
    </Provider>
);
const useCursorState = (): IContext => React.useContext(Context);

export {
    CursorProvider,
    useCursorState
};
