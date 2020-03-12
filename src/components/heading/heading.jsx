import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from './heading.css';
import Logo from '../../assets/images/logo.svg';
import data from '../../data/pages';
import {getPage} from '../../helpers/getPage';
import useHover from '../../hooks/hover';

const Heading = ({isOpen, isAnimated}) => {
    const [, setPrepared] = useState(false);
    const headingRef = useRef(null);
    const router = useRouter();
    const page = getPage(router.route);
    const title = data[page]?.title ?? 'Kávová paráda';

    useEffect(() => {
        setPrepared(true);
    }, []);

    useHover(headingRef.current);

    return (
        <Link href="/" passHref>
            <a href="/" className={styles.link} disabled={isAnimated}>
                <h1 className={styles.heading} data-test="component-heading" ref={headingRef}>
                    <span className="_visuallyhidden" data-test="component-title">{`${title} | ZdenekD`}</span>
                    <Logo className={`${styles.logo} ${isOpen ? styles.active : ''}`} />
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
