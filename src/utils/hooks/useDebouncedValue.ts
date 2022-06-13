
import React from 'react';

const useDebouncedValue = <T = unknown>(value: T, wait: number, options = {leading: false}) => {
    const [_value, setValue] = React.useState(value);
    const mountedRef = React.useRef(false);
    const timeoutRef = React.useRef<number | null>(null);
    const cooldownRef = React.useRef(false);

    const cancel = () => window.clearTimeout(timeoutRef.current ?? 0);

    React.useEffect(() => {
        if (mountedRef.current) {
            if (!cooldownRef.current && options.leading) {
                cooldownRef.current = true;
                setValue(value);
            } else {
                cancel();
                timeoutRef.current = window.setTimeout(() => {
                    cooldownRef.current = false;
                    setValue(value);
                }, wait);
            }
        }
    }, [
        value,
        options.leading,
        wait,
    ]);

    React.useEffect(() => {
        mountedRef.current = true;

        return cancel;
    }, []);

    return [_value, cancel] as const;
};

export default useDebouncedValue;
