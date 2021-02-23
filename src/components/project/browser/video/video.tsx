import React from 'react';
import Logo from '../../../logo';
import {IProject} from '../../../../data/projects';
import config from '../../../../data/config';
import styles from './video.css';

interface IVideo {
    project: IProject
}

const Video: React.FC<IVideo> = ({project}) => {
    const videoRef = React.useRef<HTMLVideoElement | null>(null);
    const handleVideo = () => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    };

    React.useEffect(() => {
        handleVideo();
    }, [project]);

    return (
        <div className={styles.wrapper}>
            <video
                ref={videoRef}
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
                <source src={`${config.cloudfront}/${project.id}.mp4`} type="video/mp4" />
            </video>
            <Logo className={styles.logo} />
        </div>
    );
};

export default Video;
