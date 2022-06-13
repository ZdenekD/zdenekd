import useEventListener from '@use-it/event-listener';
import useStore from '@/store/index';

const useCursor = (element: HTMLElement | null): void => {
    const {set, unset} = useStore(state => state.cursor);
    const handleMouseEnter = (event: MouseEvent): void => {
        if (event.target) {
            const {width, height, top, left} = (event.target as HTMLElement).getBoundingClientRect();

            set({
                isStuck: true,
                props: {
                    width,
                    height,
                    top,
                    left,
                },
            });
        }
    };
    const handleMouseLeave = () => unset();

    useEventListener('mouseenter', handleMouseEnter, element);
    useEventListener('mouseleave', handleMouseLeave, element);
};

export default useCursor;
