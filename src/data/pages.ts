import prefix from '../helpers/prefix';

export enum PagesEnum {
    homepage = 'homepage',
    projects = 'projects',
    contact = 'contact'
}

export interface IPages {
    [key: string]: {
        id: string
        slug: string
        title: string
        heading: string
        description: string
    }
}

const pages: IPages = {
    [PagesEnum.homepage]: {
        id: `${prefix}_p1`,
        slug: '',
        title: 'Úvodní stránka',
        heading: 'Vítejte',
        description: 'Tvorba webů, ruční práce, klávesový koncert | Homepage',
    },
    [PagesEnum.projects]: {
        id: `${prefix}_p2`,
        slug: 'projects',
        title: 'Projekty',
        heading: 'Projekty',
        description: 'Projekty, spolupráce a jiné radosti | Projects',
    },
    [PagesEnum.contact]: {
        id: `${prefix}_p3`,
        slug: 'contact',
        title: 'Kontakt',
        heading: 'Kontakt',
        description: 'Ozvěte se a vymyslíme řešení | Contact',
    },
};

export default pages;
