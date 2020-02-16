import React from 'react';
import Main from '../components/layout/main';
import data from '../data/pages';
import styles from './projects.css';

const Projects = () => (
    <Main data-test="component-main">
        <h2>{data.projects.heading}</h2>
        <article className={styles.article}>
            <div className={styles.browser}>
                <div className={styles.browserHeader}>
                    <ul className={styles.browserControls}>
                        <li className={styles.browserControl}></li>
                        <li className={styles.browserControl}></li>
                        <li className={styles.browserControl}></li>
                    </ul>
                    <ul className={styles.browserHistory}>
                        <li className={styles.browserBack}></li>
                        <li className={styles.browserNext}></li>
                    </ul>
                    <span className={`${styles.browserAddressbar} ${styles.browserHttps}`}>
                        https://zdenekd.cz
                    </span>
                </div>
                <div className={styles.browserContent}>
                    <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        preload="auto"
                        className={styles.video}
                        poster="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                    >
                        <track kind="captions" />
                        <track kind="description" label="Kia Motors Czech" />
                        <source src={'/tomton.mp4'} type="video/mp4" />
                    </video>
                </div>
            </div>
        </article>
    </Main>
);

export default Projects;
