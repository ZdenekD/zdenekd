import React from 'react';
import Provider from '../utils/provider';
import {dispatcher} from './actions';
import initialState from './initialState';
import reducer from './reducer';
import {IProject} from './types';
import {IActions} from './types/actions';

type IContext = [IProject, IActions | Record<string, never>];

interface IProps {
    children: React.ReactNode
}

const Context = React.createContext<IContext>([initialState, {}]);
const props = {
    Context,
    initialState,
    reducer,
    dispatcher,
};
const ProjectProvider: React.FC<IProps> = ({children}) => (
    <Provider {...props}>
        {children}
    </Provider>
);
const useProjectState = (): IContext => React.useContext(Context);

export {
    ProjectProvider,
    useProjectState
};
