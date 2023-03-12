import type {Variants} from 'framer-motion';

const animations: Variants = {
    initial: {y: 0, x: '50%'},
    enter: {
        y: '4px',
        x: '50%',
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
};

export {animations};
