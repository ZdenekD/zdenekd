/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const useClickOutside = <T extends HTMLElement = any>(handler: () => void): React.MutableRefObject<T | undefined> => {
    const ref = React.useRef();

    React.useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || (ref.current as HTMLElement).contains(event.target)) {
                return;
            }

            handler();
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);

    return ref;
};

export default useClickOutside;
