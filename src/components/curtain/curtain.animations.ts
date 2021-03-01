import {Variants} from 'framer-motion';

const variants: Variants = {
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
        background: 'var(--color-yellow-lighten-4)',
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

// eslint-disable-next-line import/prefer-default-export
export {variants};
