import { server } from './mockServer';
import preloadAll from 'jest-next-dynamic';
import '@testing-library/jest-dom/extend-expect'

beforeAll(async () => {
    server.listen()
    await preloadAll();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
