import React from 'react';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import Keys from './keys';
import Anchor from '../anchor';
import styles from './footer.css';
import Icon from '../../assets/images/icon_message.svg';
import getRoman from '../../helpers/getRoman';
import {getPageIndex} from '../../helpers/getPage';

const Footer = ({isOpen, isAnimated}) => {
    const dotRef = React.useRef(null);
    const router = useRouter();
    const index = getPageIndex(router.route);
    const year = new Date().getFullYear();
    const date = getRoman(year);
    const handleDot = () => {
        const {style} = dotRef.current;

        style.setProperty('--dot-transform', `calc(${index} * var(--gutter))`);
        style.setProperty('--dot-opacity', '1');
    };

    React.useEffect(() => {
        handleDot();
    });

    return (
        <footer className={`${styles.footer} ${!isOpen && !isAnimated ? styles.show : ''}`} data-test="component-footer">
            <code className={styles.code}>&clubs; {date} Vyrobeno pomocí <span data-tooltip="zaklínadel">&lt;kouzel&gt;</span>.</code>
            <Anchor href="mailto:ditezdenek&#64;pm.me?subject=&clubs; Zpráva přímo do schránky &clubs;" title="Zpráva přímo do schránky" className={styles.link}>
                <Icon className={styles.icon} />
            </Anchor>
            <Keys />
            <span className={styles.scroll}>
                Scroll
                <i ref={dotRef} className={styles.dot}></i>
            </span>
        </footer>
    );
};

Footer.propTypes = {
    isAnimated: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default Footer;
