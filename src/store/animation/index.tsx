import React from 'react';
import Provider from '../utils/provider';
import initialState from './initialState';
import reducer from './reducer';
import {dispatcher} from './actions';
import {IAnimation} from './type';
import {IActions} from './type/actions';

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
