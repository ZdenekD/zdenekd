import pages from '../data/pages';

const getPage = (link: string): string => Object.keys(pages).filter(item => pages[item].route === link)[0];

export default getPage;
