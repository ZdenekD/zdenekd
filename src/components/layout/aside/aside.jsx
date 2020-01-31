import React from 'react';
import styles from './aside.css';
import Navigation from '../../navigation';

const Aside = () => (
    <aside className={styles.aside} data-test="component-aside">
        <Navigation />
    </aside>
);

export default Aside;
