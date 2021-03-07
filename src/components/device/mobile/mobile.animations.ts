import {Variants} from 'framer-motion';

const variants: Variants = {
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

// eslint-disable-next-line import/prefer-default-export
export {variants};
