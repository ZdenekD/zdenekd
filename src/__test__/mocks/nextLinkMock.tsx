const nextLinkMock = jest.mock('next/link', () => function Link() {
    return <a href="/">link</a>;
});

export default nextLinkMock;
