import {Variants} from 'framer-motion';

const variants: Variants = {
    initial: {y: '40px', opacity: 0},
    enter: {
        y: 0,
        opacity: 1,
        transition: {duration: 0.8},
    },
    exit: {
        y: '20px',
        opacity: 0,
        transition: {duration: 0.2},
    },
};

// eslint-disable-next-line import/prefer-default-export
export {variants};
