import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from './heading.css';
import Logo from '../../assets/images/logo.svg';
import data from '../../data/pages';
import {getPage} from '../../helpers/getPage';
import useHover from '../../hooks/hover';

const Heading = ({isOpen, isAnimated}) => {
    const headingRef = React.useRef(null);
    const router = useRouter();
    const page = getPage(router.route);
    const title = data[page]?.title ?? 'Kávová paráda';

    useHover(headingRef.current);

    return (
        <Link passHref href="/">
            <a href="/" className={styles.link} disabled={isAnimated} aria-label="Odkaz na domovskou stránku">
                <h1 ref={headingRef} className={styles.heading} data-test="component-heading">
                    <span className="_visuallyhidden" data-test="component-title">{`${title} | ZdenekD`}</span>
                    <Logo className={`${styles.logo} ${isOpen ? styles.active : ''}`} />
                    <i className={`${styles.shadow} ${isOpen ? styles.shadowActive : ''}`}></i>
                </h1>
            </a>
        </Link>
    );
};

Heading.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    isAnimated: PropTypes.bool.isRequired,
};

export default Heading;
