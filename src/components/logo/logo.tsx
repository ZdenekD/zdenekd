import {m} from 'framer-motion';
import {
    useEffect,
    useRef,
    useState
} from 'react';
import Image from '@/assets/images/logo.svg';
import useCursor from '@/hooks/useCursor';
import useStore from '@/store';
import {animations} from './logo.animations';
import styles from './logo.module.css';

type IProps = {
    className?: string
}

const Logo = ({className = ''}: IProps) => {
    const {isOpen} = useStore(state => state.menu);
    const [catcher, setCatcher] = useState<HTMLDivElement | null>(null);
    const logoRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setCatcher(logoRef.current);
    }, []);

    useCursor(catcher);

    return (
        <div ref={logoRef} className={`${styles.wrapper} ${className}`} data-testid="component-logo">
            <Image className={styles.logo} />
            <m.i
                initial={false}
                animate={isOpen ? 'enter' : 'exit'}
                variants={animations}
                className={styles.shadow}
            />
        </div>
    );
};

export default Logo;
