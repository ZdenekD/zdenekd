const nextRouterMock = jest.mock('next/router', () => ({
    useRouter: jest.fn().mockImplementation(() => ({
        asPath: '/page/subpage/something-else',
        pathname: '/',
        route: '/',
        locale: 'cs',
        locales: ['cs', 'en'],
        query: {param: 'param'},
    })),
}));

export default nextRouterMock;
