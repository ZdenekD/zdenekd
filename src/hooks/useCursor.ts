import useEventListener from '@use-it/event-listener';
import {useGlobalState} from '../state';
import {setCursor, unsetCursor} from '../state/cursor/actions';

const useCursor = (element: HTMLElement | null): void => {
    const {dispatch} = useGlobalState();
    const handleMouseEnter = (event: MouseEvent): void => {
        if (event.target) {
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
        }
    };
    const handleMouseLeave = () => {
        dispatch(unsetCursor());
    };

    useEventListener('mouseenter', handleMouseEnter, element);
    useEventListener('mouseleave', handleMouseLeave, element);
};

export default useCursor;
