import pages from '@/data/pages';

const getPageIndex = (link: string): number => Object.keys(pages).findIndex(item => pages[item].route === link);

export default getPageIndex;
