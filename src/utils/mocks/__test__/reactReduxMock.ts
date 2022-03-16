const reactReduxMock = jest.mock('react-redux', () => ({
    useSelector: () => ({}),
    useDispatch: jest.fn(),
}));

export default reactReduxMock;
