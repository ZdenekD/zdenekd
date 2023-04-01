import {useRouter} from 'next/router';
import pages from '@/data/pages';
import projects from '@/data/projects';
import {PagesEnum, ProjectActionsEnum} from '@/enums';
import useStore from '@/store';
import type {IDistributor} from '@/types/distributor';

type IAction = {
    (value: ProjectActionsEnum): void
}

const useProjectAction = (): IAction => {
    const router = useRouter();
    const {index, set} = useStore(state => state.project);
    const minIndex = 0;
    const maxIndex = projects.length - 1;
    const distributor: IDistributor = {
        [ProjectActionsEnum.prevProject]: () => {
            if (router.route !== pages[PagesEnum.projects].route) {
                return;
            }

            if (index - 1 === minIndex) {
                set({
                    index: index - 1,
                    isFirst: true,
                    isLast: false,
                });
            }

            if (index - 1 > minIndex) {
                set({
                    index: index - 1,
                    isFirst: false,
                    isLast: false,
                });
            }
        },
        [ProjectActionsEnum.nextProject]: () => {
            if (router.route !== pages[PagesEnum.projects].route) {
                return;
            }

            if (index + 1 === maxIndex) {
                set({
                    index: index + 1,
                    isFirst: false,
                    isLast: true,
                });
            }

            if (index + 1 < maxIndex) {
                set({
                    index: index + 1,
                    isFirst: false,
                    isLast: false,
                });
            }
        },
    };
    const setAction: IAction = (type: ProjectActionsEnum) => {
        distributor[type]();
    };

    return setAction;
};

export default useProjectAction;
