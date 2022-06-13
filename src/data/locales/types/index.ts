export type ILocale = {
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
                required: string
            }
        }
        submit: string
    }
    alert: {
        close: string
    },
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
    message: {
        [key: string]: string
    }
    api: {
        send: {
            [key: string]: string
        }
    }
}

export type ILocales = {
    [key: string]: ILocale
}
