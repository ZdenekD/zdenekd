import React from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {IProject} from '../../../../data/projects';
import config from '../../../../data/config';
import {variants} from './video.animations';
import styles from './video.css';

interface IVideo {
    project: IProject
}

const Video: React.FC<IVideo> = ({project}) => {
    const wrapperRef = React.useRef<HTMLDivElement | null>(null);

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                ref={wrapperRef}
                key={project.id}
                initial="initial"
                animate="enter"
                exit="exit"
                variants={variants}
                className={styles.wrapper}
                data-test="component-video"
            >
                <video
                    playsInline
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    controls={false}
                    className={styles.video}
                    title={`Ukázka projektu: ${project.title}. ${!/localhost$/.test(project.url) ? `Stránky se nacházejí zde: ${project.url}` : ''}`}
                >
                    <track kind="captions" />
                    <track kind="description" label={project.title} />
                    <source src={`${config.cloudfront}/video/${project.id}.mp4`} type="video/mp4" />
                </video>
            </motion.div>
        </AnimatePresence>
    );
};

export default Video;
