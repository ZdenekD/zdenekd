import {useRouter} from 'next/router';
import {useStateValue} from '../state';
import setProject from '../state/project/actions';
import pages from '../data/pages';
import projects from '../data/projects';
import PagesEnum from '../enums/PagesEnum';
import ProjectActionsEnum from '../enums/ProjectActionsEnum';

interface IAction {
    (value: ProjectActionsEnum): void
}

const useProjectAction = (): IAction => {
    const router = useRouter();
    const {state, dispatch} = useStateValue();
    const minIndex = 0;
    const maxIndex = projects.length - 1;
    const distributor: {[key: string]: () => void} = {
        [ProjectActionsEnum.prevProject]: () => {
            if (router.route !== pages[PagesEnum.projects].route) {
                return;
            }

            if (state.project.index - 1 >= minIndex) {
                dispatch(setProject({project: {index: state.project.index - 1}}));
            }
        },
        [ProjectActionsEnum.nextProject]: () => {
            if (router.route !== pages[PagesEnum.projects].route) {
                return;
            }

            if (state.project.index + 1 <= maxIndex) {
                dispatch(setProject({project: {index: state.project.index + 1}}));
            }
        },
    };
    const setProjectAction: IAction = (type: ProjectActionsEnum) => {
        distributor[type]();
    };

    return setProjectAction;
};

export default useProjectAction;
