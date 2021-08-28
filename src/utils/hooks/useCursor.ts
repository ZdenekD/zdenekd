import useEventListener from '@use-it/event-listener';
import {useCursorState} from '@/store/cursor';

const useCursor = (element: HTMLElement | null): void => {
    const [, {setCursor, unsetCursor}] = useCursorState();
    const handleMouseEnter = (event: MouseEvent): void => {
        if (event.target) {
            const {width, height, top, left} = (event.target as HTMLElement).getBoundingClientRect();

            setCursor({
                cursor: {
                    isStuck: true,
                    props: {
                        width,
                        height,
                        top,
                        left,
                    },
                },
            });
        }
    };
    const handleMouseLeave = () => {
        unsetCursor();
    };

    useEventListener('mouseenter', handleMouseEnter, element);
    useEventListener('mouseleave', handleMouseLeave, element);
};

export default useCursor;
