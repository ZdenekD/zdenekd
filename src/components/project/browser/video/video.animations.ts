import {Variants} from 'framer-motion';

const variants: Variants = {
    initial: {opacity: 0},
    enter: {
        y: 0,
        opacity: 1,
        transition: {duration: 1},
    },
    exit: {
        opacity: 0,
        transition: {duration: 0.4},
    },
};

// eslint-disable-next-line import/prefer-default-export
export {variants};
