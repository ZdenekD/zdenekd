import {
    useEffect,
    useRef,
    useState
} from 'react';

const useDebouncedValue = <T = unknown>(value: T, wait: number, options = {leading: false}) => {
    const [content, setContent] = useState(value);
    const mountedRef = useRef(false);
    const timeoutRef = useRef<number | null>(null);
    const cooldownRef = useRef(false);

    const cancel = () => window.clearTimeout(timeoutRef.current ?? 0);

    useEffect(() => {
        if (mountedRef.current) {
            if (!cooldownRef.current && options.leading) {
                cooldownRef.current = true;
                setContent(value);
            } else {
                cancel();
                timeoutRef.current = window.setTimeout(() => {
                    cooldownRef.current = false;
                    setContent(value);
                }, wait);
            }
        }
    }, [
        value,
        options.leading,
        wait,
    ]);

    useEffect(() => {
        mountedRef.current = true;

        return cancel;
    }, []);

    return [content, cancel] as const;
};

export default useDebouncedValue;
