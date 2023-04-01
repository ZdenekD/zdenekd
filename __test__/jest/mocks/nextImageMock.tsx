const nextImageMock = jest.mock('next/image', () => function Image() {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src="" alt="" />;
});

export default nextImageMock;
