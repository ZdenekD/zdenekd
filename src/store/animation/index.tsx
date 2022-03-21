import React from 'react';
import Provider from '../utils/provider';
import {dispatcher} from './actions';
import initialState from './initialState';
import reducer from './reducer';
import {IAnimation} from './types';
import {IActions} from './types/actions';

type IContext = [IAnimation, IActions | Record<string, never>];

const Context = React.createContext<IContext>([initialState, {}]);
const props = {
    Context,
    initialState,
    reducer,
    dispatcher,
};
const AnimationProvider: React.FC = ({children}) => (
    <Provider {...props}>
        {children}
    </Provider>
);
const useAnimationState = (): IContext => React.useContext(Context);

export {
    AnimationProvider,
    useAnimationState
};
