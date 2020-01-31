import React from 'react';
import PropTypes from 'prop-types';
// import dynamic from 'next/dynamic';
import styles from './main.css';
import Header from '../header';
import Content from '../content';
import DATA from '../../../data/pages';

// const Aside = dynamic(() => import('../aside'));
const Main = ({site, children}) => {
    const {title} = DATA[site];

    return (
        <>
            <main className={styles.default} data-test="component-main">
                <section className={`${styles.section} ${styles[site]}`}>
                    <Header title={`${title} | ZdenekD`} />
                    <Content />
                    {children}
                    {/* <Aside /> */}
                </section>
            </main>
        </>
    );
};

Main.propTypes = {
    site: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node,
        PropTypes.number,
    ]),
};

export default Main;
