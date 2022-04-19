declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default content;
}

declare module '*.avif' {
    const content: string;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.webp' {
    const content: string;
    export default content;
}

declare module '*.css' {
    const content: {readonly [key: string]: string};
    export default content;
}

declare module '*.module.css' {
    const content: {readonly [key: string]: string};
    export default content;
}

declare namespace NodeJS {
    interface Process {
        browser: boolean;
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Window {__PRELOADED_STATE__?: any}
