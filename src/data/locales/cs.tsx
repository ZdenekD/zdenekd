import LocalesEnum from '@/enums/LocalesEnum';
import getRoman from '@/helpers/getRoman';
import {ILocales} from './types';

const year = new Date().getFullYear();
const date = getRoman(year);
const locales: ILocales = {
    [LocalesEnum.cs]: {
        header: {link: 'Odkaz na domovskou stránku'},
        footer: {
            code: (
                <>
                    &clubs; {date} Vyrobeno pomocí &lt;kouzel&gt; a &#123;kofeinu&#125;
                </>
            ),
            subject: 'Zpráva přímo do schránky',
        },
        menu: {
            open: 'Otevřít navigaci',
            close: 'Zavřít navigaci',
        },
        form: {
            input: {
                name: {
                    label: 'Jméno',
                    error: 'Jsou zadány nepovolené znaky.',
                    required: 'Je nutné zadat jméno',
                },
                email: {
                    label: 'E-mail',
                    error: 'E-mail není zadán ve správném formátu.',
                    required: 'Je nutné zadat e-mail',
                },
                message: {
                    label: 'Zpráva',
                    error: 'Jsou zadány nepovolené znaky.',
                    required: 'Zadejte zprávu',
                },
            },
            submit: 'Odeslat',
        },
        alert: {close: 'Zavřít'},
        reference: {
            target: 'Otevřít referenci v novém okně',
            video: {
                show: 'Ukázka projektu',
                link: 'Stránky se nacházejí zde',
            },
        },
        keys: {
            up: 'Předchozí stránka',
            right: 'Následující projekt',
            down: 'Následující stránka',
            left: 'Předchozí projekt',
        },
        tools: 'Technologie použitá v projektu',
        noscript: (
            <>
                <strong>
                    Nemáte zapnutý JavaScript
                </strong>
                <p>
                    Některé součásti stránek Vám nemusí fungovat správně.<br />
                    Zde jsou <a href="https://www.enable-javascript.com/cz/" target="_blank" rel="noreferrer noopener">instrukce</a> jak povolit JavaScript ve
                    Vašem webovém prohlížeči.
                </p>
            </>
        ),
        status: {
            200: 'Zpráva byla úspěšně odeslána.',
            400: 'Něco se pravděpodobně po@#$&lo.',
            405: 'Není povoleno.',
        },
    },
};

export default locales;
