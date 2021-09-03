import {Variants} from 'framer-motion';

interface IVariants {
    backdrop: Variants
    component: Variants
}

const animations: IVariants = {
    backdrop: {
        initial: {opacity: 0},
        enter: {
            opacity: 1,
            transition: {
                duration: 0.4,
                delay: 0.2,
            },
        },
        exit: {
            opacity: 0,
            transition: {duration: 0.2},
        },
    },
    component: {
        initial: {opacity: 0, scale: 0.85},
        enter: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                delay: 0.2,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.94,
            transition: {duration: 0.2},
        },
    },
};

export default animations;
