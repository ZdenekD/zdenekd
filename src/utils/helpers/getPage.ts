import pages from '@/data/pages';
import PagesEnum from '@/enums/PagesEnum';

const getPage = (link: string): string => Object.keys(pages).filter(item => pages[item as PagesEnum].route === link)[0];

export default getPage;
