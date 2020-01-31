import React from 'react';
import Link from 'next/link';
import styles from './navigation.css';
import DATA from '../../data/pages';

const Navigation = () => (
    <nav className={styles.navigation} data-test="component-navigation">
        <ul className={styles.list}>
            {Object.keys(DATA).map(item => (
                <li key={item} className={styles.item} data-test="component-link">
                    <Link href={DATA[item].link} passHref>
                        <a href={DATA[item].link} title={`${DATA[item].title} | ZdenekD`}>{DATA[item].title}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
);

export default Navigation;
