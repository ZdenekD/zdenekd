import React from 'react';
import useEventListener from '@use-it/event-listener';
import anime from 'animejs';
import projects from '../../data/projects';
import config from '../../data/config';
import Anchor from '../anchor';
import Button from '../form/button';
import styles from './project.css';
import Icon from '../../assets/images/icon_open.svg';
import Logo from '../../assets/images/logo.svg';

const Project = () => {
    const [index, setIndex] = React.useState(0);
    const [project, setProject] = React.useState(projects[Object.keys(projects)[0]]);
    const contentRef = React.useRef(null);
    const videoRef = React.useRef(null);
    const animation = React.useRef(null);
    const minIndex = 0;
    const maxIndex = Object.keys(projects).length - 1;
    let coords = [0, 0];
    const handleAnimationIn = (direction = 'next') => {
        const translate = direction === 'next' ? '10vw' : '-10vw';

        anime({
            targets: [...contentRef.current.querySelectorAll('.animated-item')],
            duration: 800,
            delay(target, i) {
                return i * 200;
            },
            opacity: [0, 1],
            translateX: [translate, 0],
            easing: 'easeOutExpo',
        });
    };
    const handleAnimationOut = (direction = 'next') => {
        const translate = direction === 'next' ? '-5vw' : '5vw';

        anime({
            targets: [...contentRef.current.querySelectorAll('.animated-item')],
            duration: 600,
            delay(target, i) {
                return i * 100;
            },
            opacity: [1, 0],
            translateX: [0, translate],
            easing: 'easeOutExpo',
        });
    };
    const handleProjectPrev = () => {
        if (index - 1 < minIndex) {
            return;
        }

        const {current: video} = videoRef;

        animation.current = anime
            .timeline({easing: 'easeOutCubic'})
            .add({
                targets: video,
                duration: 600,
                opacity: [1, 0],
                translateX: [0, '100%'],
                begin() {
                    video.pause();
                    handleAnimationOut('prev');
                },
                complete() {
                    setIndex(index - 1);
                    setProject(projects[Object.keys(projects)[index - 1]]);

                    videoRef.current.load();
                },
            })
            .add({
                targets: videoRef.current,
                duration: 800,
                opacity: [0, 1],
                translateX: ['-100%', 0],
                begin() {
                    handleAnimationIn('prev');
                },
            });

        animation.current.play();
    };
    const handleProjectNext = () => {
        if (index + 1 > maxIndex) {
            return;
        }

        const {current: video} = videoRef;

        animation.current = anime
            .timeline({easing: 'easeOutCubic'})
            .add({
                targets: video,
                duration: 600,
                opacity: [1, 0],
                translateX: [0, '-100%'],
                begin() {
                    video.pause();
                    handleAnimationOut('next');
                },
                complete() {
                    setIndex(index + 1);
                    setProject(projects[Object.keys(projects)[index + 1]]);

                    videoRef.current.load();
                },
            })
            .add({
                targets: videoRef.current,
                duration: 800,
                opacity: [0, 1],
                translateX: ['100%', 0],
                begin() {
                    handleAnimationIn('next');
                },
            });

        animation.current.play();
    };
    const handleKeyboard = event => {
        if (event.keyCode === 37) {
            handleProjectPrev();
        }

        if (event.keyCode === 39) {
            handleProjectNext();
        }
    };
    const handleTouchStart = event => {
        const touches = [event.touches[0].clientX, event.touches[0].clientY];

        coords = [...touches];
    };
    const handleTouchMove = event => {
        const {clientX, clientY} = event.touches[0];
        const [xDown, yDown] = coords;

        if (!xDown || !yDown) {
            return;
        }

        const xUp = clientX;
        const yUp = clientY;
        const xDiff = xDown - xUp;
        const yDiff = yDown - yUp;

        if (Math.abs(xDiff) < Math.abs(yDiff)) {
            return;
        }

        (xDiff < 0 ? handleProjectPrev : handleProjectNext)();

        coords = [0, 0];
    };

    useEventListener('keydown', handleKeyboard);
    useEventListener('touchstart', handleTouchStart, videoRef.current);
    useEventListener('touchmove', handleTouchMove, videoRef.current);

    React.useEffect(() => () => {
        if (animation.current) {
            animation.current.pause();
        }
    }, []);

    return (
        <div className={`${styles.block} animated-block`}>
            <div className={styles.content} ref={contentRef}>
                <div>
                    <div className="animated-block animated-item">
                        <h3 className={styles.title} data-title={project.title}>
                            {project.title}
                        </h3>
                    </div>
                    <div className={`${styles.descriptionWrapper} animated-block animated-item`}>
                        <p className={styles.description} data-title={project.description}>
                            {project.description}
                        </p>
                    </div>
                    <div className="animated-block animated-item">
                        <ul className={styles.tools}>
                            {project.tools.map(item => (
                                <li key={item} className={styles.tool}>
                                    <figure className={styles.figure}>
                                        <img
                                            src={`${config.cloudfront}/logo_${item}.svg`}
                                            alt={`Technologie použitá v projektu: ${item}`}
                                            className={styles.image}
                                        />
                                        <figcaption className={styles.caption}>{item}</figcaption>
                                    </figure>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <ul className={`${styles.controls} animated-block`}>
                    <li className={styles.control}>
                        <Button
                            type="button"
                            className={`${styles.controlPrev} ${index === minIndex ? styles.disabled : ''}`}
                            onClick={handleProjectPrev}
                            aria-label="Předchozí projekt"
                            tabIndex={index !== minIndex ? 0 : -1}
                        />
                    </li>
                    <li className={styles.control}>
                        <Button
                            type="button"
                            className={`${styles.controlNext} ${index === maxIndex ? styles.disabled : ''}`}
                            onClick={handleProjectNext}
                            aria-label="Následující projekt"
                            tabIndex={index !== maxIndex ? 0 : -1}
                        />
                    </li>
                </ul>
            </div>
            <div className={styles.project} data-test="component-project">
                <div className={styles.browser}>
                    <div className={styles.browserHeader}>
                        <ul className={styles.browserControls}>
                            <li className={styles.browserControl}></li>
                            <li className={styles.browserControl}></li>
                            <li className={styles.browserControl}></li>
                        </ul>
                        <div className={styles.browserHistory}>
                            <Button
                                type="button"
                                className={`${styles.browserPrev} ${index === minIndex ? styles.disabled : ''}`}
                                onClick={handleProjectPrev}
                                aria-label="Předchozí projekt"
                                tabIndex={index !== minIndex ? 0 : -1}
                            />
                            <Button
                                type="button"
                                className={`${styles.browserNext} ${index === maxIndex ? styles.disabled : ''}`}
                                onClick={handleProjectNext}
                                aria-label="Následující projekt"
                                tabIndex={index !== maxIndex ? 0 : -1}
                            />
                        </div>
                        <span className={`${styles.browserAddressbar} ${/https/.test(project.url) ? styles.browserHttps : styles.browserHttp}`}>
                            {project.url}
                        </span>
                        <div className={styles.browserTarget}>
                            {!/localhost$/.test(project.url) && (
                                <Anchor
                                    href={project.url}
                                    className={styles.browserLink}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="Otevřít referenci v novém okně"
                                >
                                    <Icon className={styles.icon} />
                                </Anchor>
                            )}
                        </div>
                    </div>
                    <div className={styles.browserContent}>
                        <video playsInline autoPlay muted loop preload="auto" controls={false} className={styles.video} ref={videoRef} alt={`Ukázka projektu: ${project.title}. ${!/localhost$/.test(project.url) ? `Stránky zde: ${project.url}` : ''}`}>
                            <track kind="captions" />
                            <track kind="description" label={project.title} />
                            <source src={`${config.cloudfront}/${project.id}.mp4`} type="video/mp4" />
                        </video>
                        <Logo className={styles.logo} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;