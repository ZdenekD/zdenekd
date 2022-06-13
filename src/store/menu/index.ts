import {SetState} from 'zustand';
import type {IStore} from '..';

type IValue = {
    isOpen: boolean | undefined
}

type IActions = {
    set: (action: IValue) => void
}

type ISlice = (set: SetState<IStore>) => IState;

export type IState = {menu: IValue & IActions};

const initial: IValue = {isOpen: undefined};

const menu: ISlice = set => ({
    menu: {
        ...initial,
        set: action => set(state => ({menu: {...state.menu, ...action}})),
    },
});

export default menu;
