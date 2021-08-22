const nextRouterMock = jest.mock('next/router', () => ({
    useRouter: jest.fn().mockImplementation(() => ({
        pathname: '/',
        route: '/',
        locale: 'en',
        locales: ['cs', 'en'],
        query: {param: 'param'},
    })),
}));

export default nextRouterMock;
