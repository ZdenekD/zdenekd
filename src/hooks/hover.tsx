import useEventListener from '@use-it/event-listener';
import {useStateValue} from '../state';
import ActionsEnum from '../state/cursor/type/actions';
import {initialState} from '../state/cursor/type';

const useHover = (element: HTMLElement | null): void => {
    const {dispatch} = useStateValue();
    const handleMouseEnter = (event: MouseEvent): void => {
        const {width, height, top, left} = (event.target as HTMLElement).getBoundingClientRect();

        dispatch({
            type: ActionsEnum.save,
            payload: {
                cursor: {
                    isStuck: true,
                    props: {
                        width,
                        height,
                        top,
                        left,
                    },
                },
            },
        });
    };
    const handleMouseLeave = () => {
        dispatch({
            type: ActionsEnum.save,
            payload: {...initialState},
        });
    };

    useEventListener('mouseenter', handleMouseEnter, element);
    useEventListener('mouseleave', handleMouseLeave, element);
};

export default useHover;
