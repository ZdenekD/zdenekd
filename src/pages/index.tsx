import React from 'react';
import Layout from '../components/layout';
import pages from '../data/pages';
import PagesEnum from '../enums/PagesEnum';
import styles from '../assets/styles/pages/index.css';

const Page: React.FC = () => (
    <Layout className={styles.root} data-test="component-layout">
        <h1 data-test="component-heading">{pages[PagesEnum.homepage].heading}</h1>
        <article className={styles.article}>
            <p className={`${styles.paragraph} animated-block`}>
                Profesionální hře na&nbsp;klávesnici se&nbsp;věnuji několik let.<br />
                Pomohu vám převést přání do kódu, kterému rozumí lidé i stroje.
            </p>
            <p className={`${styles.paragraph} _align-right animated-block`}>
                <span>Tvořím s láskou a nadšením</span><br />
                <span>ZdenekD</span>
            </p>
        </article>
    </Layout>
);

export default Page;
