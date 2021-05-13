import React from 'react';
import Controls from './controls';
import Video from './video';
import Addressbar from './addressbar';
import Target from './target';
import Picture from '../../UI/picture';
import {IProject} from '../../../data/projects';
import useWindowSize from '../../../hooks/useWindowSize';
import MediaQueriesEnum from '../../../enums/MediaQueriesEnum';
import styles from './browser.module.css';

interface IBrowser {
    project: IProject
    isFirst: boolean
    isLast: boolean
    handlePrev?: (event: React.MouseEvent) => void
    handleNext?: (event: React.MouseEvent) => void
}

const Browser = React.forwardRef<HTMLElement, IBrowser>(({
    project,
    isFirst,
    isLast,
    handlePrev = undefined,
    handleNext = undefined,
}, ref) => {
    const {width} = useWindowSize();

    return (
        <section
            ref={ref}
            className={styles.browser}
            data-test="component-browser"
        >
            <header className={styles.header}>
                <span className={styles.controls}>
                    <i className={styles.control} />
                    <i className={styles.control} />
                    <i className={styles.control} />
                </span>
                <Controls
                    isFirst={isFirst}
                    isLast={isLast}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                />
                <Addressbar url={project.url} />
                <Target url={project.url} />
            </header>
            {width > MediaQueriesEnum.sm ? (
                <Video project={project} />
            ) : (
                <Picture
                    src={`/image/mobile_${project.id}`}
                    width={480}
                    height={270}
                />
            )}
        </section>
    );
});

Browser.displayName = 'Browser';

export default Browser;
