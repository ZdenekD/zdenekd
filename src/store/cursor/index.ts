import {SetState} from 'zustand';
import type {IStore} from '..';

type IValue = {
    isStuck: boolean,
    props: {
        width: number,
        height: number,
        top: number,
        left: number,
    }
}

type IActions = {
    set: (action: IValue) => void
    unset: () => void
}

type ISlice = (set: SetState<IStore>) => IState;

export type IState = {cursor: IValue & IActions};

const initial: IValue = {
    isStuck: false,
    props: {
        width: 0,
        height: 0,
        top: 0,
        left: 0,
    },
};

const cursor: ISlice = set => ({
    cursor: {
        ...initial,
        set: action => set(state => ({cursor: {...state.cursor, ...action}})),
        unset: () => set(state => ({cursor: {...state.cursor, ...initial}})),
    },
});

export default cursor;
