import {Variants} from 'framer-motion';

const variants: Variants = {
    initial: {y: '5vh', opacity: 0},
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: 0.4,
            ease: [
                0.165,
                0.84,
                0.44,
                1,
            ],
        },
    },
    exit: {
        opacity: 0,
        transition: {duration: 0.4},
    },
};

// eslint-disable-next-line import/prefer-default-export
export {variants};
