import type {Variants} from 'framer-motion';

const animations: Variants = {
    enter: {
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: [
                0.215,
                0.61,
                0.355,
                1,
            ],
        },
    },
    exit: {
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: 1.1,
            ease: [
                0.165,
                0.84,
                0.44,
                1,
            ],
        },
    },
};

export {animations};
