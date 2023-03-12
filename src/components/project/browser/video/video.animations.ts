import type {Variants} from 'framer-motion';

const animations: Variants = {
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

export {animations};
