import LocalesEnum from '@/enums/LocalesEnum';
import PagesEnum from '@/enums/PagesEnum';

export type IPages = {
    [key in PagesEnum]: {
        id: string
        route: string
        locale: {
            [locale in LocalesEnum]: {
                title: string
                heading: string
                description: string
                paragraph?: JSX.Element
            }
        }
    }
}
