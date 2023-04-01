import type {Variants} from 'framer-motion';

type IVariants = {
    article: Variants
    devices: Variants
}

const animations: IVariants = {
    article: {
        initial: {y: '3vh', opacity: 0},
        enter: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: 1.2,
                ease: [
                    0.215,
                    0.61,
                    0.355,
                    1,
                ],
            },
        },
        exit: {
            opacity: 0,
            transition: {duration: 0.4},
        },
    },
    devices: {
        initial: {opacity: 0},
        enter: {
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: 1.6,
            },
        },
        exit: {
            opacity: 0,
            transition: {duration: 0.4},
        },
    },
};

export default animations;
