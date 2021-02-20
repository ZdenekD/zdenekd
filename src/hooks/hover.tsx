import useEventListener from '@use-it/event-listener';
import {useStateValue} from '../state';
import {setCursor, unsetCursor} from '../state/cursor/actions';

const useHover = (element: HTMLElement | null): void => {
    const {dispatch} = useStateValue();
    const handleMouseEnter = (event: MouseEvent): void => {
        const {width, height, top, left} = (event.target as HTMLElement).getBoundingClientRect();

        dispatch(setCursor({
            cursor: {
                isStuck: true,
                props: {
                    width,
                    height,
                    top,
                    left,
                },
            },
        }));
    };
    const handleMouseLeave = () => {
        dispatch(unsetCursor());
    };

    useEventListener('mouseenter', handleMouseEnter, element);
    useEventListener('mouseleave', handleMouseLeave, element);
};

export default useHover;
