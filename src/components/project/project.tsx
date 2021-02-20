import React from 'react';
import Image from 'next/image';
import Browser from './browser';
import Controls from './controls';
import projects, {IProject} from '../../data/projects';
import config from '../../data/config';
import styles from './project.css';

const Project: React.FC = () => {
    const [project] = React.useState<IProject>(projects[0]);
    const handlePrev = () => {
        console.log('Handle Prev');
    };
    const handleNext = () => {
        console.log('Handle next');
    };

    return (
        <div className={styles.block}>
            <header className={styles.content}>
                {project?.title && (
                    <h2 className={styles.title} data-title={project.title}>
                        {project.title}
                    </h2>
                )}

                {project?.description && (
                    <p className={styles.description} data-title={project.description}>
                        {project.description}
                    </p>
                )}

                {project?.tools.length > 0 && (
                    <ul className={styles.tools}>
                        {project.tools.map(item => (
                            <li key={item} className={styles.tool}>
                                <figure className={styles.figure}>
                                    <Image
                                        width={40}
                                        height={40}
                                        src={`${config.cloudfront}/logo_${item}.svg`}
                                        alt={`Technologie použitá v projektu: ${item}`}
                                        className={styles.image}
                                    />
                                    <figcaption className={styles.caption}>{item}</figcaption>
                                </figure>
                            </li>
                        ))}
                    </ul>
                )}

                <Controls
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                />
            </header>
            <Browser
                project={project}
                handlePrev={handlePrev}
                handleNext={handleNext}
            />
        </div>
    );
};

export default Project;
