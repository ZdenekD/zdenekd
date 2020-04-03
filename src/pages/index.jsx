import React from 'react';
import Main from '../components/layout/main';
import styles from './homepage.css';
import data from '../data/pages';

const Homepage = () => (
    <Main data-test="component-main">
        <h1 data-test="component-heading">{data.homepage.heading}</h1>
        <article className={styles.article}>
            <p className={`${styles.paragraph} animated-block`}>
                Mé jméno je Zdeněk a&nbsp;<strong data-title="zírání">hře</strong> na&nbsp;klávesnici se&nbsp;věnuji od&nbsp;roku&nbsp;2010.
            </p>
            <p className={`${styles.paragraph} animated-block`}>
                Dokončené projekty se&nbsp;skládají z&nbsp;menších interaktivních webů, e-shopů a&nbsp;pokročilejších portálů.
            </p>
            <p className={`${styles.paragraph} _align-right animated-block`}>
                <span>Tvořím s <strong data-title="kávou">láskou</strong> a <strong data-title="lezením">nadšením</strong>.</span><br />
                <span>ZdenekD</span>
            </p>
        </article>
    </Main>
);

export default Homepage;
