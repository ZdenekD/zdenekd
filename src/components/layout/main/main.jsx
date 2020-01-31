import React from 'react';
import styles from './main.css';
import Header from '../header';
import Content from '../content';
import Aside from '../aside';

const Main = () => (
    <main className={styles.default} data-test="component-main">
        <section className={styles.section}>
            <Header title="ZdenekD" />
            <Content />
            <Aside />
        </section>
    </main>
);

export default Main;
