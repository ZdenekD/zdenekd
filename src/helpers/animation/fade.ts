const fade = {
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
};

const fadeX = {
    initial: {opacity: 0, translateX: 20},
    enter: {
        ...fade.enter,
        translateX: 0,
    },
    exit: {
        ...fade.exit,
        translateX: 10,
    },
};

const fadeY = {
    initial: {opacity: 0, translateY: 20},
    enter: {
        ...fade.enter,
        translateY: 0,
    },
    exit: {
        ...fade.exit,
        translateY: 10,
    },
};

const fadeScale = {
    initial: {opacity: 0, scale: 0.75},
    enter: {
        ...fade.enter,
        scale: 1,
    },
    exit: {
        ...fade.exit,
        scale: 0.94,
    },
};

// eslint-disable-next-line import/prefer-default-export
export {
    fade,
    fadeX,
    fadeY,
    fadeScale
};
