export interface IConfig {
    cloudfront: string | undefined
}

const config: IConfig = {cloudfront: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_CLOUDFRONT : ''};

export default config;
