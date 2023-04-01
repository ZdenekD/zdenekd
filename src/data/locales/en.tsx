import {LocalesEnum} from '@/enums';
import getRoman from '@/helpers/getRoman';
import type {ILocales} from './types';

const year = new Date().getFullYear();
const date = getRoman(year);
const locales: ILocales = {
    [LocalesEnum.en]: {
        header: {link: 'Link to homepage'},
        footer: {
            code: (
                <>
                    &clubs; {date} Made with &lt;spells&gt; and &#123;caffeine&#125;
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
                    required: 'Name is required',
                },
                email: {
                    label: 'E-mail',
                    error: 'E-mail is not entered in the correct format.',
                    required: 'E-mail is required',
                },
                message: {
                    label: 'Message',
                    error: 'It contains illegal characters.',
                    required: 'Message is required',
                },
            },
            submit: 'Submit',
        },
        button: {close: 'Close'},
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
                    Some parts of the site may not work properly for you.<br />
                    Here are <a href="https://www.enable-javascript.com/cz/" target="_blank" rel="noreferrer noopener">instructions</a> how to enable JavaScript in your browser.
                </p>
            </>
        ),
        message: {
            successSave: 'Successfully saved.',
            successRemove: 'Successfully removed.',
        },
        api: {
            send: {
                response: 'Thank you. The message has been successfully sent.',
                notAllowed: 'Not allowed',
            },
        },
    },
};

export default locales;
