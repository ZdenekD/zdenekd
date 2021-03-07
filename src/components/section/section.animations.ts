import {Variants} from 'framer-motion';

const variants: Variants = {
    initial: {opacity: 0},
    enter: {
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: 0.8,
            ease: [
                0.39,
                0.575,
                0.565,
                1,
            ],
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.6,
            ease: [
                0.645,
                0.045,
                0.355,
                1,
            ],
        },
    },
};

// eslint-disable-next-line import/prefer-default-export
export {variants};
