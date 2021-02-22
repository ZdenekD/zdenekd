import React from 'react';
import useCursor from '../../hooks/useCursor';
import Image from '../../assets/images/logo.svg';
import styles from './logo.css';

interface ILogo {
    className?: string
}

const Logo: React.FC<ILogo> = ({className = ''}) => {
    const [element, setElement] = React.useState<HTMLDivElement | null>(null);
    const logoRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        setElement(logoRef.current);
    }, []);

    useCursor(element);

    return (
        <div ref={logoRef} className={`${styles.wrapper} ${className}`}>
            <Image className={styles.logo} data-test="component-logo" />
            <i className={styles.shadow}></i>
        </div>
    );
};

export default Logo;
