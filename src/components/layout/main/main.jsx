import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import styles from './main.css';
import Header from '../header';
import Content from '../content';
import DATA from '../../../data/pages';

const Aside = dynamic(() => import('../aside'));
const Main = ({site}) => {
    const {title} = DATA[site];

    return (
        <main className={styles.default} data-test="component-main">
            <section className={`${styles.section} ${styles[site]}`}>
                <Header title={`${title} | ZdenekD`} />
                <Content />
                <Aside />
            </section>
        </main>
    );
};

Main.propTypes = {site: PropTypes.string.isRequired};

export default Main;
