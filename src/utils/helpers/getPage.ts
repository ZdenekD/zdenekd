import pages from '@/data/pages';
import type {PagesEnum} from '@/enums';

const getPage = (link: string): string => Object.keys(pages).filter(item => pages[item as PagesEnum].route === link)[0];

export default getPage;
