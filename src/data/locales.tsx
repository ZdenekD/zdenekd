import getRoman from '../helpers/getRoman';
import LocalesEnum from '../enums/LocalesEnum';

export interface ILocale {
    header: {
        link: string
    }
    footer: {
        code: JSX.Element
        subject: string
    }
    menu: {
        open: string
        close: string
    },
    form: {
        input: {
            [key: string]: {
                label: string
                error: string
            }
        }
        submit: string
    }
    reference: {
        target: string
        video: {
            show: string
            link: string
        }
    }
    keys: {
        up: string
        right: string
        down: string
        left: string
    }
    tools: string
    noscript: JSX.Element
    status: {
        [key: string]: string
    }
}

export interface ILocales {
    [key: string]: {
        locale: ILocale
    }
}

const year = new Date().getFullYear();
const date = getRoman(year);
const locales: ILocales = {
    [LocalesEnum.cs]: {
        locale: {
            header: {link: 'Odkaz na domovskou stránku'},
            footer: {
                code: (
                    <>
                        &clubs; {date} Vyrobeno pomocí &lt;kouzel&gt; a &#123;zaklínadel&#125;
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
                    },
                    email: {
                        label: 'E-mail',
                        error: 'E-mail není zadán ve správném formátu.',
                    },
                    message: {
                        label: 'Zpráva',
                        error: 'Jsou zadány nepovolené znaky.',
                    },
                },
                submit: 'Odeslat',
            },
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
                        Zde jsou <a href="https://www.enable-javascript.com/cz/" target="_blank" rel="noreferrer noopener"> instrukce</a> jak povolit JavaScript ve
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
    },
    [LocalesEnum.en]: {
        locale: {
            header: {link: 'Link to homepage'},
            footer: {
                code: (
                    <>
                        &clubs; {date} Made with &lt;spells&gt; and &#123;incantations&#125;
                    </>
                ),
                subject: 'Message directly to the mailbox',
            },
            menu: {
                open: 'Open navigation',
                close: 'Close navigation',
            },
            form: {
                input: {
                    name: {
                        label: 'Name',
                        error: 'It contains illegal characters.',
                    },
                    email: {
                        label: 'E-mail',
                        error: 'E-mail is not entered in the correct format.',
                    },
                    message: {
                        label: 'Message',
                        error: 'It contains illegal characters.',
                    },
                },
                submit: 'Submit',
            },
            reference: {
                target: 'Open the reference in a new window',
                video: {
                    show: 'Sample project',
                    link: 'The site can be found here',
                },
            },
            keys: {
                up: 'Previous page',
                right: 'Next project',
                down: 'Next page',
                left: 'Previous project',
            },
            tools: 'Technology used in the project',
            noscript: (
                <>
                    <strong>
                        You don&amp;t have JavaScript enabled
                    </strong>
                    <p>
                        Some parts of the site may not work properly for you..<br />
                        Here are <a href="https://www.enable-javascript.com/cz/" target="_blank" rel="noreferrer noopener"> instructions</a> how to enable JavaScript in your browser.
                    </p>
                </>
            ),
            status: {
                200: 'Message was successfully sent.',
                400: 'Something went wrong.',
                405: 'Not allowed.',
            },
        },
    },
};

export default locales;
