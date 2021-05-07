const routerMock = jest.mock('next/router', () => ({
    useRouter: jest.fn().mockImplementation(() => ({
        pathname: '/',
        route: '/',
        locale: 'cs',
        locales: ['cs', 'en'],
    })),
}));

export default routerMock;
