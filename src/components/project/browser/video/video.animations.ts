import {Variants} from 'framer-motion';

const variants: Variants = {
    initial: {opacity: 0},
    enter: {
        y: 0,
        opacity: 1,
        transition: {duration: 0.75},
    },
    exit: {
        opacity: 0,
        transition: {duration: 0.5},
    },
};

export {variants};
