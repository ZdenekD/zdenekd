import prefix from '../helpers/prefix';
import PagesEnum from '../enums/PagesEnum';

export interface IPages {
    [key: string]: {
        id: string
        route: string
        title: string
        heading: string
        description: string
    }
}

const pages: IPages = {
    [PagesEnum.homepage]: {
        id: `${prefix}_p1`,
        route: '/',
        title: 'Úvodní stránka',
        heading: 'Vítejte',
        description: 'Tvorba webů, ruční práce, klávesový koncert | Homepage',
    },
    [PagesEnum.projects]: {
        id: `${prefix}_p2`,
        route: '/projects',
        title: 'Projekty',
        heading: 'Projekty',
        description: 'Projekty, spolupráce a jiné radosti | Projects',
    },
    [PagesEnum.contact]: {
        id: `${prefix}_p3`,
        route: '/contact',
        title: 'Kontakt',
        heading: 'Kontakt',
        description: 'Ozvěte se a vymyslíme řešení | Contact',
    },
};

export default pages;
