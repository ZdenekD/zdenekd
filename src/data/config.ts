export interface IConfig {
    cloudfront: string
}

const config: IConfig = {cloudfront: process.env.NODE_ENV === 'production' ? 'https://d2yvj9qmuwjxbq.cloudfront.net' : ''};

export default config;
