import {RouterContext} from "next/dist/shared/lib/router-context";
import * as nextImage from 'next/image';
import {AnimatePresence, LazyMotion, domAnimation} from 'framer-motion';
import {initialize, mswDecorator} from 'msw-storybook-addon'
import handlers from '@/mocks/handlers';
import {Provider} from '../src/store';
import './index.css';
import Cursor from '../src/components/cursor';

const viewports = {
    320: {
        name: '320',
        styles: {
            width: '320px',
            height: '640px',
        },
    },
    640: {
        name: '640',
        styles: {
            width: '640px',
            height: '768px',
        },
    },
    960: {
        name: '960',
        styles: {
            width: '960px',
            height: '768px',
        },
    },
    1280: {
        name: '1280',
        styles: {
            width: '1280px',
            height: '1024px',
        },
    },
};

initialize();

Object.defineProperty(nextImage, 'default', {
    configurable: true,
    value: props => <img {...props} />
});

export const parameters = {
    viewport: {viewports},
    msw: handlers,
    nextRouter: {
        Provider: RouterContext.Provider,
    },
}

export const decorators = [
    mswDecorator,
    Story => (
        <Provider>
            <AnimatePresence exitBeforeEnter>
                <LazyMotion strict features={domAnimation}>
                    <Story />
                    <Cursor />
                </LazyMotion>
            </AnimatePresence>
        </Provider>
    )
]
