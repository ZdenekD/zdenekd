import React from 'react';
import Controls from './controls';
import Video from './video';
import Addressbar from './addressbar';
import {IProject} from '../../../data/projects';
import styles from './browser.css';

interface IBrowser {
    project: IProject,
    handlePrev?: (event: React.MouseEvent) => void
    handleNext?: (event: React.MouseEvent) => void
}

const Browser: React.FC<IBrowser> = ({
    project,
    handlePrev = undefined,
    handleNext = undefined,
}) => (
    <section className={styles.browser} data-test="component-browser">
        <header className={styles.header}>
            <span className={styles.controls}>
                <i className={styles.control} />
                <i className={styles.control} />
                <i className={styles.control} />
            </span>
            <Controls handlePrev={handlePrev} handleNext={handleNext} />
            <Addressbar url={project.url} />
        </header>
        <Video project={project} />
    </section>
);

export default Browser;
