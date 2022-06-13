import {SetState} from 'zustand';
import type {IStore} from '..';

type IValue = {
    isAsideAnimated: boolean
}

type IActions = {
    set: (action: IValue) => void
}

type ISlice = (set: SetState<IStore>) => IState;

export type IState = {animation: IValue & IActions};

const initial: IValue = {isAsideAnimated: false};

const animation: ISlice = set => ({
    animation: {
        ...initial,
        set: action => set(state => ({animation: {...state.animation, ...action}})),
    },
});

export default animation;
