import {useRouter} from 'next/router';
import pages from '@/data/pages';
import projects from '@/data/projects';
import PagesEnum from '@/enums/PagesEnum';
import ProjectActionsEnum from '@/enums/ProjectActionsEnum';
import {useProjectState} from '@/store/project';
import type {IDistributor} from '@/types/distributor';

interface IAction {
    (value: ProjectActionsEnum): void
}

const useProjectAction = (): IAction => {
    const router = useRouter();
    const [{project}, {setProject}] = useProjectState();
    const minIndex = 0;
    const maxIndex = projects.length - 1;
    const distributor: IDistributor = {
        [ProjectActionsEnum.prevProject]: () => {
            if (router.route !== pages[PagesEnum.projects].route) {
                return;
            }

            if (project.index - 1 === minIndex) {
                setProject({
                    project: {
                        index: project.index - 1,
                        isFirst: true,
                        isLast: false,
                    },
                });
            }

            if (project.index - 1 > minIndex) {
                setProject({
                    project: {
                        index: project.index - 1,
                        isFirst: false,
                        isLast: false,
                    },
                });
            }
        },
        [ProjectActionsEnum.nextProject]: () => {
            if (router.route !== pages[PagesEnum.projects].route) {
                return;
            }

            if (project.index + 1 === maxIndex) {
                setProject({
                    project: {
                        index: project.index + 1,
                        isFirst: false,
                        isLast: true,
                    },
                });
            }

            if (project.index + 1 < maxIndex) {
                setProject({
                    project: {
                        index: project.index + 1,
                        isFirst: false,
                        isLast: false,
                    },
                });
            }
        },
    };
    const setProjectAction: IAction = (type: ProjectActionsEnum) => {
        distributor[type]();
    };

    return setProjectAction;
};

export default useProjectAction;
