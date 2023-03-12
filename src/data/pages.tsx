import LocalesEnum from '@/enums/LocalesEnum';
import PagesEnum from '@/enums/PagesEnum';
import prefix from '@/helpers/prefix';
import type {IPages} from '@/types/pages';

const pages: IPages = {
    [PagesEnum.homepage]: {
        id: `${prefix}_p1`,
        route: '/',
        locale: {
            [LocalesEnum.cs]: {
                title: 'Úvodní stránka',
                heading: 'Vítejte',
                description: 'Tvorba webů, ruční práce, klávesový koncert | Homepage',
                paragraph: (
                    <>
                        Profesionální hře na&nbsp;klávesnici se&nbsp;věnuji několik let.<br />
                        Pomohu vám převést přání do kódu, kterému rozumí lidé i stroje.
                    </>
                ),
            },
            [LocalesEnum.en]: {
                title: 'Homepage',
                heading: 'Welcome',
                description: 'Webdesign, manual work, keyboard concert | Homepage',
                paragraph: (
                    <>
                        I&nbsp;have been playing on&nbsp;keyboard for several years.<br />
                        I&apos;ll help you translate wishes into code that people and machines understand.
                    </>
                ),
            },
        },
    },
    [PagesEnum.projects]: {
        id: `${prefix}_p2`,
        route: '/projects',
        locale: {
            [LocalesEnum.cs]: {
                title: 'Projekty',
                heading: 'Projekty',
                description: 'Projekty, spolupráce a jiné radosti | Projects',
            },
            [LocalesEnum.en]: {
                title: 'Projects',
                heading: 'Projects',
                description: 'Projects, cooperation and other pleasures | Projects',
            },
        },
    },
    [PagesEnum.contact]: {
        id: `${prefix}_p3`,
        route: '/contact',
        locale: {
            [LocalesEnum.cs]: {
                title: 'Kontakt',
                heading: 'Kontakt',
                description: 'Ozvěte se a vymyslíme řešení | Contact',
            },
            [LocalesEnum.en]: {
                title: 'Contact',
                heading: 'Contact',
                description: 'Contact me and we find a solution together | Contact',
            },
        },
    },
};

export default pages;
