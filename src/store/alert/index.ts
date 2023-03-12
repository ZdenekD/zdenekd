import type {IStore} from '..';
import type {SetState} from 'zustand';

type IValue = {
    status?: number
    message: string | undefined
}

type IActions = {
    set: (action: IValue) => void
    unset: () => void
}

type ISlice = (set: SetState<IStore>) => IState;

export type IState = {alert: IValue & IActions};

const initial: IValue = {
    status: undefined,
    message: undefined,
};

const alert: ISlice = set => ({
    alert: {
        ...initial,
        set: action => set(state => ({alert: {...state.alert, ...action}})),
        unset: () => set(state => ({alert: {...state.alert, ...initial}})),
    },
});

export default alert;
