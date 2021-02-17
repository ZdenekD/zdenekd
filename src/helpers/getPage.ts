import pages from '../data/pages';

const getPage = (link: string): string => Object.keys(pages).filter(item => pages[item].link === link)[0];

const getPageIndex = (link: string): number => Object.keys(pages).findIndex(item => pages[item].link === link);

export {
    getPage,
    getPageIndex
};
