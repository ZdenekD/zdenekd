import LocalesEnum from '@/enums/LocalesEnum';
import {IProjects} from '@/types/projects';

const projects: IProjects = [
    {
        id: 'tomton',
        title: 'Tomton',
        url: 'https://www.tomton.cz',
        tools: [
            'nextjs',
            'graphcms',
            'react',
            'typescript',
            'lottie',
            'framer-motion',
            'animejs',
        ],
        locale: {
            [LocalesEnum.cs]: {description: 'Společnost vyrabějící designové otopné systémy. Jeden z modelů získal celosvětově uznávané ocenění Red Dot Design Award.'},
            [LocalesEnum.en]: {description: 'Company producing design heating systems. One of the models won the world-renowned Red Dot Design Award.'},
        },
    },
    {
        id: 'fit-s-marky',
        title: 'Fit s Marky',
        url: 'https://fit-s-marky.cz',
        tools: [
            'nextjs',
            'react',
            'typescript',
            'lottie',
            'framer-motion',
        ],
        locale: {
            [LocalesEnum.cs]: {description: 'Webové stránky instruktorky pilates a jógy.'},
            [LocalesEnum.en]: {description: 'Pilates and yoga instructor website.'},
        },
    },
    {
        id: 'dirtjob',
        title: 'Dirtjob',
        url: 'http://dirtjob.cz/',
        tools: [
            'octobercms',
            'vanillajs',
            'sass',
            'gulp',
        ],
        locale: {
            [LocalesEnum.cs]: {description: 'Úklidová společnost s osobním přístupem. Úklid lze objednat z domova nebo kanceláře pomocí formuláře.'},
            [LocalesEnum.en]: {description: 'Cleaning company with a personal approach. Cleaning can be ordered from home or office using the form.'},
        },
    },
    {
        id: 'digitalvision',
        title: 'DigitalVision',
        url: 'https://digitalvision.cz/',
        tools: [
            'react',
            'lottie',
            'animejs',
            'postcss',
            'webpack',
        ],
        locale: {
            [LocalesEnum.cs]: {description: 'Digitální agentura s širokým záběrem od designu, webového vývoje, přes tvorbu her až po marketing. Společnost zaměřující se na úzký vztah s klientem.'},
            [LocalesEnum.en]: {description: 'Digital agency with a wide range from design, web development, through game creation to marketing. A company focusing on a close relationship with the client.'},
        },
    },
    {
        id: 'stenclova',
        title: 'Ivana Štenclová',
        url: 'http://www.stenclova.cz',
        tools: [
            'octobercms',
            'vanillajs',
            'sass',
            'gulp',
        ],
        locale: {
            [LocalesEnum.cs]: {description: 'Česká umělkyně, vyjadřující se převážně kresbou, ale také pomocí nástrojů jako je tavná pistole, laser nebo dekorační válečky.'},
            [LocalesEnum.en]: {description: 'Czech artist, expressing herself mostly by drawing, but also by tools such as a hot air gun, laser or decorative rollers.'},
        },
    },
    {
        id: 'avprague',
        title: 'AVPrague',
        url: 'https://avprague.in.progress',
        tools: [
            'octobercms',
            'jquery',
            'postcss',
            'gulp',
        ],
        locale: {
            [LocalesEnum.cs]: {description: 'Pronájem ubytování v Praze přes službu Airbnb.'},
            [LocalesEnum.en]: {description: 'Accommodation for rent in Prague via Airbnb.'},
        },
    },
    {
        id: 'portfolium',
        title: 'Portfolium',
        url: 'https://portfolium.in.progress',
        tools: [
            'octobercms',
            'jquery',
            'sass',
            'gulp',
        ],
        locale: {
            [LocalesEnum.cs]: {description: 'Kompletní služby ohledně pronájmu bytových jednotek nebo domů.'},
            [LocalesEnum.en]: {description: 'Complete services regarding the rental of apartment units or houses.'},
        },
    },
];

export default projects;
