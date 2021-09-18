import React from 'react';
import Provider from '../utils/provider';
import initialState from './initialState';
import reducer from './reducer';
import {dispatcher} from './actions';
import {IProject} from './types';
import {IActions} from './types/actions';

type IContext = [IProject, IActions | Record<string, never>];

const Context = React.createContext<IContext>([initialState, {}]);
const props = {
    Context,
    initialState,
    reducer,
    dispatcher,
};
const ProjectProvider: React.FC = ({children}) => (
    <Provider {...props}>
        {children}
    </Provider>
);
const useProjectState = (): IContext => React.useContext(Context);

export {
    ProjectProvider,
    useProjectState
};
