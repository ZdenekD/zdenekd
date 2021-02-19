import {Variants} from 'framer-motion';

const list: Variants = {
    animate: {
        opacity: 1,
        transition: {
            duration: 0.4,
            when: 'beforeChildren',
            delayChildren: 0.1,
            staggerChildren: 0.1,
            ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.8,
            when: 'afterChildren',
            staggerChildren: 0.2,
            ease: 'easeOut',
        },
    },
};

const item: Variants = {
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
    exit: {
        y: '-6vh',
        opacity: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

export {list, item};
