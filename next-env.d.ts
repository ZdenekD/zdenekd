declare module '*.svg' {
    const content: React.SFC<React.SVGProps<SVGSVGElement>>;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.css' {
    const content: {[key: string]: string};
    export default content;
}
