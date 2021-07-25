import {addParameters, addDecorator} from '@storybook/react';
import {withNextRouter} from 'storybook-addon-next-router';
import {LazyMotion, domAnimation} from 'framer-motion';
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

addDecorator(withNextRouter({locales: ['cs', 'en']}));
addDecorator(Story => (
    <Provider>
        <LazyMotion strict features={domAnimation}>
            <Story />
            <Cursor />
        </LazyMotion>
    </Provider>
));
addParameters({viewport: {viewports}});
