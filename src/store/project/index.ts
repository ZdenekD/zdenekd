import {SetState} from 'zustand';
import type {IStore} from '..';

type IValue = {
    index: number
    isFirst: boolean
    isLast: boolean
}

type IActions = {
    set: (action: IValue) => void
}

type ISlice = (set: SetState<IStore>) => IState;

export type IState = {project: IValue & IActions};

const initial: IValue = {
    index: 0,
    isFirst: true,
    isLast: false,
};

const project: ISlice = set => ({
    project: {
        ...initial,
        set: action => set(state => ({project: {...state.project, ...action}})),
    },
});

export default project;
