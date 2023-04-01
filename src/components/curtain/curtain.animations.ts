import type {Variants} from 'framer-motion';

const animations: Variants = {
    enter: {
        y: '100%',
        background: 'var(--curtain-color)',
        transition: {
            duration: 1.2,
            ease: [
                0.645,
                0.045,
                0.355,
                1,
            ],
        },
    },
    exit: {
        y: 0,
        background: 'var(--curtain-base-color)',
        transition: {
            duration: 1.2,
            ease: [
                0.645,
                0.045,
                0.355,
                1,
            ],
        },
    },
};

export {animations};
