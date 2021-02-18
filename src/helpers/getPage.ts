import pages from '../data/pages';

const getPage = (link: string): string => Object.keys(pages).filter(item => `/${pages[item].slug}` === link)[0];

const getPageIndex = (link: string): number => Object.keys(pages).findIndex(item => `/${pages[item].slug}` === link);

export {
    getPage,
    getPageIndex
};
