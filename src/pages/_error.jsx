import React, {useEffect} from 'react';
import lottie from 'lottie-web';
import './_index.css';
import Main from '../components/layout/main';
import styles from './_error.css';
import config from '../data/config';

const Error = () => {
    const contentRef = React.useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: contentRef.current,
            renderer: 'svg',
            autoplay: true,
            loop: true,
            path: `${config.cloudfront}/error.json`,
        });
    }, []);

    return (
        <Main data-test="component-error">
            <h1 data-test="component-heading">Stránka bohužel neexistuje</h1>
            <div ref={contentRef} className={styles.animation}></div>
        </Main>
    );
};

export default Error;
