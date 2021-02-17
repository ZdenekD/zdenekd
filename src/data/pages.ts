export enum PagesEnum {
    homepage = 'homepage',
    projects = 'projects',
    contact = 'contact'
}

export interface IPages {
    [key: string]: {
        link: string
        title: string
        heading: string
        description: string
    }
}

const pages: IPages = {
    [PagesEnum.homepage]: {
        link: '/',
        title: 'Úvodní stránka',
        heading: 'Vítejte',
        description: 'Tvorba webů, ruční práce, klávesový koncert | Homepage',
    },
    [PagesEnum.projects]: {
        link: '/projects',
        title: 'Projekty',
        heading: 'Projekty',
        description: 'Projekty, spolupráce a jiné radosti | Projects',
    },
    [PagesEnum.contact]: {
        link: '/contact',
        title: 'Kontakt',
        heading: 'Kontakt',
        description: 'Ozvěte se a vymyslíme řešení | Contact',
    },
};

export default pages;
