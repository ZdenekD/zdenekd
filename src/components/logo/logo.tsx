import React from 'react';
import {motion} from 'framer-motion';
import useCursor from '../../hooks/useCursor';
import {useMenuState} from '../../state/menu';
import {variants} from './logo.animations';
import Image from '../../assets/images/logo.svg';
import styles from './logo.css';

interface ILogo {
    className?: string
}

const Logo: React.FC<ILogo> = ({className = ''}) => {
    const [{menu}] = useMenuState();
    const [catcher, setCatcher] = React.useState<HTMLDivElement | null>(null);
    const logoRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        setCatcher(logoRef.current);
    }, []);

    useCursor(catcher);

    return (
        <div ref={logoRef} className={`${styles.wrapper} ${className}`}>
            <Image className={styles.logo} data-test="component-logo" />
            <motion.i
                initial={false}
                animate={menu.isOpen ? 'enter' : 'exit'}
                variants={variants}
                className={styles.shadow}
            />
        </div>
    );
};

export default Logo;
