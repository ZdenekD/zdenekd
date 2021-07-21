import React from 'react';
import Provider from '../utils/provider';
import initialState from './initialState';
import reducer from './reducer';
import {dispatcher} from './actions';
import {IMessage} from './type';
import {IActions} from './type/actions';

type IContext = [IMessage, IActions | Record<string, never>];

const Context = React.createContext<IContext>([initialState, {}]);
const props = {
    Context,
    initialState,
    reducer,
    dispatcher,
};
const MessageProvider: React.FC = ({children}) => (
    <Provider {...props}>
        {children}
    </Provider>
);
const useMessageState = (): IContext => React.useContext(Context);

export {
    MessageProvider,
    useMessageState
};
