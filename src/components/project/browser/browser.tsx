import Image from 'next/image';
import React from 'react';
import MediaQueriesEnum from '@/enums/MediaQueriesEnum';
import useWindowSize from '@/hooks/useWindowSize';
import {IProject} from '@/types/projects';
import Addressbar from './addressbar';
import Controls from './controls';
import Target from './target';
import Video from './video';
import styles from './browser.module.css';

interface IProps {
    project: IProject
    isFirst: boolean
    isLast: boolean
    handlePrev?: (event: React.MouseEvent) => void
    handleNext?: (event: React.MouseEvent) => void
}

const Browser = React.forwardRef<HTMLElement, IProps>(({
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
                <Image
                    src={`/image/mobile_${project.id}.png`}
                    width={480}
                    height={270}
                    alt=""
                />
            )}
        </section>
    );
});

Browser.displayName = 'Browser';

export default Browser;
