import {useRouter} from 'next/router';
import pages from '@/data/pages';
import PageActionsEnum from '@/enums/PageActionsEnum';
import getPageIndex from '@/helpers/getPageIndex';
import type {IDistributor} from './types/distributor';

interface IAction {
    (value: PageActionsEnum): void
}

const usePageAction = (): IAction => {
    const router = useRouter();
    const items = Object.keys(pages);
    const index = getPageIndex(router.route);
    const minIndex = 0;
    const maxIndex = items.length - 1;
    const distributor: IDistributor = {
        [PageActionsEnum.prevPage]: () => {
            if (index - 1 >= minIndex) {
                router.push(pages[items[index - 1]].route);
            }
        },
        [PageActionsEnum.nextPage]: () => {
            if (index + 1 <= maxIndex) {
                router.push(pages[items[index + 1]].route);
            }
        },
    };
    const setPageAction: IAction = (type: PageActionsEnum) => {
        distributor[type]();
    };

    return setPageAction;
};

export default usePageAction;
