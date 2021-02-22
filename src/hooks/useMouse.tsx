import useEventListener from '@use-it/event-listener';
import {debounce} from 'underscore';
import usePageAction from './usePageAction';
import PageActionsEnum from '../enums/PageActionsEnum';

const useMouse = (): void => {
    const setPageAction = usePageAction();
    const handleMouse = (event: WheelEvent) => {
        const {deltaY} = event;
        const handleUp = () => {
            setPageAction(PageActionsEnum.prevPage);
        };
        const handleDown = () => {
            setPageAction(PageActionsEnum.nextPage);
        };

        (deltaY > 0 ? handleDown : handleUp)();
    };

    useEventListener('wheel', debounce(handleMouse, 200));
};

export default useMouse;
