import React from 'react';

const getFullscreenElement = (): HTMLElement | null => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const doc = window.document as any;

    const fullscreenElement = doc.fullscreenElement
    || doc.webkitFullscreenElement
    || doc.mozFullScreenElement
    || doc.msFullscreenElement;

    return fullscreenElement;
};

const exitFullscreen = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const doc = window.document as any;

    if (typeof doc.exitFullscreen === 'function') return doc.exitFullscreen();

    if (typeof doc.msExitFullscreen === 'function') return doc.msExitFullscreen();

    if (typeof doc.webkitExitFullscreen === 'function') return doc.webkitExitFullscreen();

    if (typeof doc.mozCancelFullScreen === 'function') return doc.mozCancelFullScreen();

    return null;
};

const enterFullScreen = async (element: HTMLElement) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const el = element as any;

    return (
        el.requestFullscreen?.()
        || el.msRequestFullscreen?.()
        || el.webkitRequestFullscreen?.()
        || el.mozRequestFullscreen?.()
    );
};

const prefixes = [
    '',
    'webkit',
    'moz',
    'ms',
];

const addEvents = (
    element: HTMLElement,
    {
        onFullScreen,
        onError,
    }: {onFullScreen: (event: Event) => void; onError: (event: Event) => void}
) => {
    prefixes.forEach(prefix => {
        element.addEventListener(`${prefix}fullscreenchange`, onFullScreen);
        element.addEventListener(`${prefix}fullscreenerror`, onError);
    });

    return () => {
        prefixes.forEach(prefix => {
            element.removeEventListener(`${prefix}fullscreenchange`, onFullScreen);
            element.removeEventListener(`${prefix}fullscreenerror`, onError);
        });
    };
};

const useFullscreen = <T extends HTMLElement>() => {
    const [isFullscreen, setFullscreen] = React.useState<boolean>(false);
    const elementRef = React.useRef<T>();
    const handleFullscreenChange = React.useCallback(
        (event: Event) => setFullscreen(event.target === getFullscreenElement()),
        [setFullscreen]
    );
    const handleFullscreenError = React.useCallback(
        () => setFullscreen(false),
        [setFullscreen]
    );
    const toggle = React.useCallback(async () => {
        if (!getFullscreenElement()) {
            await enterFullScreen(elementRef.current as T);
        } else {
            await exitFullscreen();
        }
    }, []);
    const ref = (element: T | null) => {
        if (element === null) {
            elementRef.current = window.document.documentElement as T;
        } else {
            elementRef.current = element;
        }
    };

    React.useEffect(() => {
        if (!elementRef.current && window.document) {
            elementRef.current = window.document.documentElement as T;

            return addEvents(elementRef.current, {
                onFullScreen: handleFullscreenChange,
                onError: handleFullscreenError,
            });
        }

        if (elementRef.current) {
            return addEvents(elementRef.current, {
                onFullScreen: handleFullscreenChange,
                onError: handleFullscreenError,
            });
        }

        return undefined;
    }, [handleFullscreenChange, handleFullscreenError]);

    return {
        ref,
        toggle,
        isFullscreen,
    } as const;
};

export default useFullscreen;
