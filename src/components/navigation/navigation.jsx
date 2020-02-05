import React from 'react';
import Link from 'next/link';
import styles from './navigation.css';
import data from '../../data/pages';

const Navigation = () => {
    const handleMouse = event => {
        const tolerance = 5;
        const left = 0;
        const right = event.nativeEvent.target.clientWidth;
        let x = event.pageX - event.target.offsetLeft;

        if (x - tolerance < left) {
            x = left;
        }

        if (x + tolerance > right) {
            x = right;
        }

        event.target.style.setProperty('--x', `${x}px`);
    };

    return (
        <nav className={styles.navigation} data-test="component-navigation">
            <ul className={styles.list}>
                {Object.keys(data).map(item => (
                    <li key={item} className={styles.item} data-test="component-link">
                        <Link href={data[item].link} passHref>
                            <a
                                href={data[item].link}
                                title={`${data[item].title} | ZdenekD`}
                                className={styles.link}
                                onMouseEnter={handleMouse}
                            >
                                {data[item].title}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
