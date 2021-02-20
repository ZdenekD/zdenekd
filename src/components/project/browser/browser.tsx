import Anchor from '../../../UI/anchor';
import Logo from '../../logo';
import {IProject} from '../../../data/projects';
import config from '../../../data/config';
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
            <ul className={styles.controls}>
                <li className={styles.control} />
                <li className={styles.control} />
                <li className={styles.control} />
            </ul>
            <button
                type="button"
                className={styles.prev}
                aria-label="Předchozí projekt"
                tabIndex={0}
                onClick={handlePrev}
            />
            <button
                type="button"
                className={styles.next}
                aria-label="Následující projekt"
                tabIndex={0}
                onClick={handleNext}
            />
            <span className={`${styles.addressbar} ${/https/.test(project.url) ? styles.https : styles.http}`}>
                {!/in.progress$/.test(project.url) && (
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Otevřít referenci v novém okně"
                    >
                        {project.url}
                    </a>
                )}

                {/in.progress$/.test(project.url) && (project.url)}
            </span>
            {!/in.progress$/.test(project.url) && (
                <div className={styles.target}>
                    <Anchor
                        href={project.url}
                        className={styles.targetLink}
                        target="_blank"
                        aria-label="Otevřít referenci v novém okně"
                    >
                        {/* <Icon className={styles.icon} /> */}
                    </Anchor>
                </div>
            )}
        </header>
        <div className={styles.content}>
            <video
                playsInline
                autoPlay
                muted
                loop
                preload="auto"
                controls={false}
                className={styles.video}
                title={`Ukázka projektu: ${project.title}. ${!/localhost$/.test(project.url) ? `Stránky zde: ${project.url}` : ''}`}
            >
                <track kind="captions" />
                <track kind="description" label={project.title} />
                <source src={`${config.cloudfront}/${project.id}.mp4`} type="video/mp4" />
            </video>
            <Logo className={styles.logo} />
        </div>
    </section>
);

export default Browser;
