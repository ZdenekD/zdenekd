import {m, AnimatePresence} from 'framer-motion';
import React from 'react';
import useLocale from '@/hooks/useLocale';
import {IProject} from '@/types/projects';
import {animations} from './video.animations';
import styles from './video.module.css';

type IProps = {
    project: IProject
}

const Video: React.FC<IProps> = ({project}) => {
    const wrapperRef = React.useRef<HTMLDivElement | null>(null);
    const locale = useLocale();

    return (
        <AnimatePresence exitBeforeEnter>
            <m.div
                ref={wrapperRef}
                key={project.id}
                initial="initial"
                animate="enter"
                exit="exit"
                variants={animations}
                className={styles.wrapper}
                data-testid="component-video"
            >
                <video
                    playsInline
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    controls={false}
                    className={styles.video}
                    title={`${locale.reference.video.show}: ${project.title}. ${!/localhost$/.test(project.url) ? `${locale.reference.video.link}: ${project.url}` : ''}`}
                >
                    <track kind="captions" />
                    <track kind="description" label={project.title} />
                    <source src={`/video/${project.id}.mp4`} type="video/mp4" />
                </video>
            </m.div>
        </AnimatePresence>
    );
};

export default Video;
