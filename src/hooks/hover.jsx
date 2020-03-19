import useEventListener from '@use-it/event-listener';
import state from '../state';
import {handleCursor} from '../state/cursor/actions';

const useHover = element => {
    // eslint-disable-next-line no-unused-vars
    const [{cursor}, dispatch] = state.useStateValue();
    const handleMouseEnter = event => {
        const {width, height, top, left} = event.target.getBoundingClientRect();
        const data = {
            isStuck: true,
            props: {
                width,
                height,
                top,
                left,
            },
        };

        dispatch(handleCursor(data));
    };
    const handleMouseLeave = () => {
        const data = {
            isStuck: false,
            props: {
                width: 0,
                height: 0,
                top: 0,
                left: 0,
            },
        };

        dispatch(handleCursor(data));
    };

    useEventListener('mouseenter', handleMouseEnter, element);
    useEventListener('mouseleave', handleMouseLeave, element);
};

export default useHover;
