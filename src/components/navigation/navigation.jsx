import React from 'react';
import Link from 'next/link';
import styles from './navigation.css';
import data from '../../data/pages';

const Navigation = () => (
    <nav className={styles.navigation} data-test="component-navigation">
        <ul className={styles.list}>
            {Object.keys(data).map(item => (
                <li key={item} className={styles.item} data-test="component-link">
                    <Link href={data[item].link} passHref>
                        <a href={data[item].link} title={`${data[item].title} | ZdenekD`}>{data[item].title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);

export default Navigation;
