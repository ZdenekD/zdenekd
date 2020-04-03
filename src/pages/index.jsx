import React from 'react';
import Main from '../components/layout/main';
import styles from './homepage.css';
import data from '../data/pages';

const Homepage = () => (
    <Main data-test="component-main">
        <h1 data-test="component-heading">{data.homepage.heading}</h1>
        <article className={styles.article}>
            <p className={`${styles.paragraph} animated-block`}>
                Profesionální <strong data-tooltip="zírání">hře</strong> na&nbsp;klávesnici se&nbsp;věnuji několik let.<br />
                Převedu všechny vaše přání do kódu, kterému rozumí lidé i počítače.
            </p>
            <p className={`${styles.paragraph} _align-right animated-block`}>
                <span>Tvořím s <strong data-tooltip="kávou">láskou</strong> a <strong data-tooltip="lezením">nadšením</strong>.</span><br />
                <span>ZdenekD</span>
            </p>
        </article>
    </Main>
);

export default Homepage;
