import {Variants} from 'framer-motion';

const variants: Variants = {
    initial: {opacity: 0},
    enter: {
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 0.6,
            staggerChildren: 0.2,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            ease: 'easeOut',
            duration: 0.4,
            staggerChildren: 0.1,
        },
    },
};
const variant: Variants = {
    initial: {
        x: '20px',
        opacity: 0,
    },
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 0.8,
        },
    },
    exit: {
        x: '10px',
        opacity: 0,
        transition: {
            ease: 'easeOut',
            duration: 0.4,
        },
    },
};

export {variants, variant};
