import useEventListener from '@use-it/event-listener';
import _ from 'lodash';
import PageActionsEnum from '@/enums/PageActionsEnum';
import usePageAction from './usePageAction';

const useWheel = (): void => {
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

    useEventListener('wheel', _.debounce(handleMouse, 200));
};

export default useWheel;
