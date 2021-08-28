const nextImageMock = jest.mock('next/image', () => function Image() {
    return <img src="" alt="" />;
});

export default nextImageMock;
