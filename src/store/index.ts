import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import alert from './alert';
import animation from './animation';
import cursor from './cursor';
import menu from './menu';
import project from './project';
import type {IState as IAlert} from './alert';
import type {IState as IAnimation} from './animation';
import type {IState as ICursor} from './cursor';
import type {IState as IMenu} from './menu';
import type {IState as IProject} from './project';

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
