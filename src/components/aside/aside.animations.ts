import {Variants} from 'framer-motion';

const variants: Variants = {
    enter: {
        y: 0,
        transition: {
            duration: 1,
            ease: [
                0.215,
                0.61,
                0.355,
                1,
            ],
        },
    },
    exit: {
        y: '-100%',
        transition: {
            duration: 0.6,
            delay: 0.8,
            ease: [
                0.165,
                0.84,
                0.44,
                1,
            ],
        },
    },
};

// eslint-disable-next-line import/prefer-default-export
export {variants};
