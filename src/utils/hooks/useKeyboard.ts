import useEventListener from '@use-it/event-listener';
import {debounce} from 'underscore';
import usePageAction from './usePageAction';
import useProjectAction from './useProjectAction';
import PageActionsEnum from '../enums/PageActionsEnum';
import ProjectActionsEnum from '../enums/ProjectActionsEnum';
import {IDistributor} from './types/distributor';

const useKeyboard = (): void => {
    const setPageAction = usePageAction();
    const setProjectAction = useProjectAction();
    const handleKeyboard = (event: KeyboardEvent): void => {
        const distributor: IDistributor = {
            ArrowUp() {
                setPageAction(PageActionsEnum.prevPage);
            },
            PageUp() {
                setPageAction(PageActionsEnum.prevPage);
            },
            ArrowDown() {
                setPageAction(PageActionsEnum.nextPage);
            },
            PageDown() {
                setPageAction(PageActionsEnum.nextPage);
            },
            ArrowRight() {
                setProjectAction(ProjectActionsEnum.nextProject);
            },
            ArrowLeft() {
                setProjectAction(ProjectActionsEnum.prevProject);
            },
        };

        if (distributor[event.code]) {
            distributor[event.code]();
        }
    };

    useEventListener('keydown', debounce(handleKeyboard, 200));
};

export default useKeyboard;
