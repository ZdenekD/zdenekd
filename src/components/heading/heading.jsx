import React from 'react';
import {useRouter} from 'next/router';
import styles from './heading.css';
import Logo from '../../../public/logo.svg';
import data from '../../data/pages';

const Heading = () => {
    const router = useRouter();
    const [page] = Object.keys(data).filter(item => data[item].link === router.asPath);
    const heading = data[page]?.title ?? 'Káva';

    return (
        <h1 className={styles.heading} data-test="component-heading">
            <span className="_visuallyhidden">{`${heading} | ZdenekD`}</span>
            <Logo className={styles.logo} />
        </h1>
    );
};

export default Heading;
