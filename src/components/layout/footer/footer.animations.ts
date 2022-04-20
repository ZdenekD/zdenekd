import {Variants} from 'framer-motion';

type IVariants = {
    footer: Variants
    locale: Variants
    scroll: Variants
    dot: Variants
}

const animations: IVariants = {
    footer: {
        initial: {opacity: 0},
        enter: {
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: 1.4,
            },
        },
        exit: {
            opacity: 0,
            transition: {duration: 0.4},
        },
    },
    locale: {
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
    },
    scroll: {
        enter: {
            opacity: 0,
            transition: {
                duration: 0.4,
                delay: 0.2,
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
                delay: 1,
                ease: [
                    0.165,
                    0.84,
                    0.44,
                    1,
                ],
            },
        },
    },
    dot: {
        initial: {y: 0, opacity: 1},
        enter: {
            y: '50px',
            opacity: 0,
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
                ease: [
                    0.16,
                    1,
                    0.3,
                    1,
                ],
            },
        },
    },
};

export {animations};
