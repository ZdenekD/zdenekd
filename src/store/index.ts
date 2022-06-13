import create from 'zustand';
import {devtools} from 'zustand/middleware';
import alert, {IState as IAlert} from './alert';
import animation, {IState as IAnimation} from './animation';
import cursor, {IState as ICursor} from './cursor';
import menu, {IState as IMenu} from './menu';
import project, {IState as IProject} from './project';

export type IStore = IAlert & IAnimation & ICursor & IMenu & IProject;

const useStore = create<IStore, [['zustand/devtools', never]]>(
    devtools(set => ({
        ...alert(set),
        ...animation(set),
        ...cursor(set),
        ...menu(set),
        ...project(set),
    }))
);

export default useStore;
