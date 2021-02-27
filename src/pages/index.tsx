import React from 'react';
import Layout from '../components/layout';
import Heading from '../components/heading';
import pages from '../data/pages';
import PagesEnum from '../enums/PagesEnum';
import styles from '../assets/styles/pages/index.css';

const Page: React.FC = () => (
    <Layout className={styles.root} data-test="component-layout">
        <Heading data-test="component-heading">{pages[PagesEnum.homepage].heading}</Heading>
        <article className={styles.article}>
            <p className={styles.paragraph}>
                Profesionální hře na&nbsp;klávesnici se&nbsp;věnuji několik let.<br />
                Pomohu vám převést přání do kódu, kterému rozumí lidé i stroje.
            </p>
            <p className={`${styles.paragraph} _align-right`}>
                <span>Tvořím s láskou a nadšením</span><br />
                <span>ZdenekD</span>
            </p>
        </article>
    </Layout>
);

export default Page;
