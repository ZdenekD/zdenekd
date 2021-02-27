import {Variants} from 'framer-motion';

const variants: Variants = {
    animate: {
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: [
                0.39,
                0.575,
                0.565,
                1,
            ],
        },
    },
    exit: {
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: 1,
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
