import {Variants} from 'framer-motion';

const list: Variants = {
    animate: {
        opacity: 1,
        transition: {
            duration: 0.4,
            delay: 0.4,
            staggerChildren: 0.3,
            easing: 'easeOutCubic',
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.3,
            easing: 'easeOutCubic',
        },
    },
};

const item: Variants = {
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            easing: 'easeOutCubic',
        },
    },
    exit: {
        y: '-8vh',
        opacity: 0,
        transition: {
            duration: 0.6,
            easing: 'easeOutCubic',
        },
    },
};

export {list, item};
