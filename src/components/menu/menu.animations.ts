import anime from 'animejs';

interface IAnimation {
    pathTop: SVGPathElement | null
    pathMiddle: SVGPathElement | null
    pathBottom: SVGPathElement | null
}

const animationIn = ({pathTop, pathMiddle, pathBottom}: IAnimation): void => {
    if (
        pathTop
        && pathMiddle
        && pathBottom
    ) {
        anime
            .timeline({
                duration: 800,
                easing: 'easeInOutBack',
            })
            .add({
                targets: [pathTop, pathBottom],
                d: 'M30,50 L70,50 Z',
            })
            .add({
                targets: pathMiddle,
                opacity: [1, 0],
            }, '-=600')
            .add({
                targets: pathTop,
                rotate: '45deg',
            }, '-=600')
            .add({
                targets: pathBottom,
                rotate: '-45deg',
            }, '-=1000');
    }
};

const animationOut = ({pathTop, pathMiddle, pathBottom}: IAnimation): void => {
    if (
        pathTop
        && pathMiddle
        && pathBottom
    ) {
        anime
            .timeline({
                duration: 800,
                easing: 'easeInOutBack',
            })
            .add({
                targets: pathTop,
                rotate: '0',
            })
            .add({
                targets: pathBottom,
                rotate: '0',
            }, '-=600')
            .add({
                targets: pathMiddle,
                opacity: [0, 1],
            }, '-=600')
            .add({
                targets: pathTop,
                d: 'M30,40 L70,40 Z',
            }, '-=400')
            .add({
                targets: pathBottom,
                d: 'M30,60 L70,60 Z',
            }, '-=800');
    }
};

export {animationIn, animationOut};
