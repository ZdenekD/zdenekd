import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from './heading.css';
import Logo from '../../assets/images/logo.svg';
import data from '../../data/pages';
import getPage from '../../helpers/getPage';

const Heading = ({isOpen, isAnimated}) => {
    const router = useRouter();
    const [page] = getPage(router.asPath);
    const heading = data[page]?.title ?? 'Kávová paráda';

    return (
        <Link href="/" passHref>
            <a href="/" className={styles.link} disabled={isAnimated}>
                <h1 className={styles.heading} data-test="component-heading">
                    <span className="_visuallyhidden" data-test="component-title">{`${heading} | ZdenekD`}</span>
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
