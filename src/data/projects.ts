export interface IProject {
    id: string
    title: string
    url: string
    description: string
    tools: string[]
}

const projects: IProject[] = [
    {
        id: 'tomton',
        title: 'Tomton',
        url: 'https://www.tomton.cz',
        description: 'Společnost vyrabějící designové otopné systémy. Za jeden ze svých modelů získala ocenění Red Dot Design Award.',
        tools: [
            'react',
            'wordpress',
            'lottie',
            'animejs',
            'webpack',
        ],
    },
    {
        id: 'stenclova',
        title: 'Ivana Štenclová',
        url: 'http://www.stenclova.cz',
        description: 'Česká umělkyně, vyjadřující se převážně kresbou, ale také pomocí nástrojů jako je tavná pistole, laser nebo dekorační válečky.',
        tools: [
            'vanillajs',
            'octobercms',
            'sass',
            'gulp',
        ],
    },
    {
        id: 'dirtjob',
        title: 'Dirtjob',
        url: 'http://dirtjob.cz/',
        description: 'Úklidová společnost s osobním přístupem. Úklid lze objednat z domova nebo kanceláře pomocí formuláře.',
        tools: [
            'vanillajs',
            'octobercms',
            'sass',
            'gulp',
        ],
    },
    {
        id: 'digitalvision',
        title: 'DigitalVision',
        url: 'https://digitalvision.cz/',
        description: 'Digitální agentura s širokým záběrem od designu, webového vývoje, přes tvorbu her až po marketing. Společnost zaměřující se na úzký vztah s klientem.',
        tools: [
            'react',
            'lottie',
            'animejs',
            'postcss',
            'webpack',
        ],
    },
    {
        id: 'avprague',
        title: 'AVPrague',
        url: 'https://avprague.in.progress',
        description: 'Pronájem ubytování v Praze přes službu Airbnb.',
        tools: [
            'jquery',
            'octobercms',
            'postcss',
            'gulp',
        ],
    },
    {
        id: 'portfolium',
        title: 'Portfolium',
        url: 'https://portfolium.in.progress',
        description: 'Kompletní služby ohledně pronájmu bytových jednotek nebo domů.',
        tools: [
            'jquery',
            'octobercms',
            'sass',
            'gulp',
        ],
    },
];

export default projects;
