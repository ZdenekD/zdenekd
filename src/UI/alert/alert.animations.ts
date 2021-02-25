import {Variants} from 'framer-motion';

const fade: Variants = {
    initial: {opacity: 0},
    enter: {
        opacity: 1,
        transition: {
            duration: 0.4,
            delay: 0.2,
        },
    },
    exit: {
        opacity: 0,
        transition: {duration: 0.2},
    },
};

const fadeScale: Variants = {
    initial: {opacity: 0, scale: 0.75},
    enter: {
        ...fade.enter,
        scale: 1,
    },
    exit: {
        ...fade.exit,
        scale: 0.94,
    },
};

export {fade, fadeScale};
