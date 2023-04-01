import useEventListener from '@use-it/event-listener';
import {ProjectActionsEnum} from '@/enums';
import type {IDistributor} from '@/types/distributor';
import useProjectAction from './useProjectAction';

const useSwipe = (): void => {
    let coords = [0, 0];
    const setProjectAction = useProjectAction();
    const distributor: IDistributor = {
        [ProjectActionsEnum.prevProject]: () => {
            setProjectAction(ProjectActionsEnum.prevProject);
        },
        [ProjectActionsEnum.nextProject]: () => {
            setProjectAction(ProjectActionsEnum.nextProject);
        },
    };
    const handleTouchStart = (event: TouchEvent) => {
        const touches = [event.touches[0].clientX, event.touches[0].clientY];

        coords = [...touches];
    };
    const handleTouchMove = (event: TouchEvent): void => {
        const {clientX, clientY} = event.touches[0];
        const [xDown, yDown] = coords;

        if (!xDown || !yDown) {
            return;
        }

        const xUp = clientX;
        const yUp = clientY;
        const xDiff = xDown - xUp;
        const yDiff = yDown - yUp;

        if (Math.abs(xDiff) < Math.abs(yDiff)) {
            return;
        }

        (xDiff < 0 ? distributor[ProjectActionsEnum.prevProject] : distributor[ProjectActionsEnum.nextProject])();

        coords = [0, 0];
    };

    useEventListener('touchstart', handleTouchStart);
    useEventListener('touchmove', handleTouchMove);
};

export default useSwipe;
