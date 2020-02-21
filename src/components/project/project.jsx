import React, {useState, useRef} from 'react';
import useEventListener from '@use-it/event-listener';
import projects from '../../data/projects';
import styles from './project.css';

const Project = () => {
    const [index, setIndex] = useState(0);
    const [project, setProject] = useState(projects[Object.keys(projects)[0]]);
    const videoRef = useRef(null);
    const minIndex = 0;
    const maxIndex = Object.keys(projects).length - 1;
    const handleProjectPrev = () => {
        if (index - 1 < minIndex) {
            return;
        }

        const {current: video} = videoRef;

        video.pause();

        setIndex(index - 1);
        setProject(projects[Object.keys(projects)[index - 1]]);

        video.load();
    };
    const handleProjectNext = () => {
        if (index + 1 > maxIndex) {
            return;
        }

        const {current: video} = videoRef;

        video.pause();

        setIndex(index + 1);
        setProject(projects[Object.keys(projects)[index + 1]]);

        video.load();
    };
    const handleKeyboard = event => {
        if (event.keyCode === 37) {
            handleProjectPrev();
        }

        if (event.keyCode === 39) {
            handleProjectNext();
        }
    };

    useEventListener('keydown', handleKeyboard);

    return (
        <>
            <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p>
                    {project.description}
                </p>
            </div>
            <div className={styles.browser} data-test="component-project">
                <div className={styles.browserHeader}>
                    <ul className={styles.browserControls}>
                        <li className={styles.browserControl}></li>
                        <li className={styles.browserControl}></li>
                        <li className={styles.browserControl}></li>
                    </ul>
                    <div className={styles.browserHistory}>
                        <button type="button" className={styles.browserBack} onClick={handleProjectPrev}></button>
                        <button type="button" className={styles.browserNext} onClick={handleProjectNext}></button>
                    </div>
                    <span className={`${styles.browserAddressbar} ${/https/.test(project.url) ? styles.browserHttps : styles.browserHttp}`}>
                        {project.url}
                    </span>
                </div>
                <div className={styles.browserContent}>
                    <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        preload="auto"
                        controls={false}
                        className={styles.video}
                        ref={videoRef}
                    >
                        <track kind="captions" />
                        <track kind="description" label={project.title} />
                        <source src={`/${project.id}.mp4`} type="video/mp4" />
                    </video>
                </div>
            </div>
        </>
    );
};

export default Project;
