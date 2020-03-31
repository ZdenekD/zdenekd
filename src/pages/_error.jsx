import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import './_index.css';
import Main from '../components/layout/main';
import styles from './_error.css';
import config from '../data/config';

const Error = () => (
    <>
        <Head>
            <script async src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        </Head>
        <Main data-test="component-error">
            <lottie-player loop autoplay src={`${config.cloudfront}/error.json`} speed="1" class={styles.animation}></lottie-player>
        </Main>
    </>
);

Error.propTypes = {statusCode: PropTypes.number};

export default Error;
