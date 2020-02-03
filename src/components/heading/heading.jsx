import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from './heading.css';
import Logo from '../../../public/logo.svg';
import data from '../../data/pages';
import getPage from '../../helpers/getPage';

const Heading = () => {
    const router = useRouter();
    const [page] = getPage(router.asPath);
    const heading = data[page]?.title ?? 'Kávová paráda';

    return (
        <Link href="/">
            <h1 className={styles.heading} data-test="component-heading">
                <span className="_visuallyhidden" data-test="component-title">{`${heading} | ZdenekD`}</span>
                <Logo className={styles.logo} />
            </h1>
        </Link>
    );
};

export default Heading;
