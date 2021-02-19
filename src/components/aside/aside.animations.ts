import {Variants} from 'framer-motion';

const variants: Variants = {
    animate: {
        y: 0,
        transition: {
            duration: 0.8,
            easing: 'easeOutQuart',
        },
    },
    exit: {
        y: '-100%',
        transition: {
            duration: 0.6,
            delay: 0.8,
            easing: 'easeOutQuart',
        },
    },
};

export default variants;
