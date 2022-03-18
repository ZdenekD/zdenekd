import pages from '@/data/pages';
import PagesEnum from '@/enums/PagesEnum';

const getPageIndex = (link: string): number => Object.keys(pages).findIndex(item => pages[item as PagesEnum].route === link);

export default getPageIndex;
