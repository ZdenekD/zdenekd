import React from 'react';
import anime from 'animejs';
import Browser from './browser';
import Controls from './controls';
import Tools from './tools';
import useProjectAction from '../../hooks/useProjectAction';
import useCursor from '../../hooks/useCursor';
import ProjectActionsEnum from '../../enums/ProjectActionsEnum';
import {useStateValue} from '../../state';
import projects from '../../data/projects';
import styles from './project.css';

const Project: React.FC = () => {
    const {state} = useStateValue();
    const [project, setProject] = React.useState<number>(state.project.index);
    const [element, setElement] = React.useState<HTMLUListElement | null>(null);
    const titleRef = React.useRef<HTMLHeadingElement | null>(null);
    const descriptionRef = React.useRef<HTMLParagraphElement | null>(null);
    const toolsWrapperRef = React.useRef<HTMLDivElement | null>(null);
    const toolsRef = React.useRef<HTMLUListElement | null>(null);
    const browserRef = React.useRef<HTMLDivElement | null>(null);
    const setProjectAction = useProjectAction();
    const handlePrev = () => {
        setProjectAction(ProjectActionsEnum.prevProject);
    };
    const handleNext = () => {
        setProjectAction(ProjectActionsEnum.nextProject);
    };
    const handleAnimation = () => {
        const {current: title} = titleRef;
        const {current: description} = descriptionRef;
        const {current: tools} = toolsWrapperRef;
        const translateIn = state.project.index > project ? '10vw' : '-10vw';
        const translateOut = state.project.index > project ? '-5vw' : '5vw';

        anime.timeline({easing: 'easeOutExpo'})
            .add({
                targets: [
                    title,
                    description,
                    tools,
                ],
                duration: 600,
                delay(_, i) {
                    return i * 100;
                },
                opacity: [1, 0],
                translateX: [0, translateOut],
                complete() {
                    setProject(state.project.index);
                },
            })
            .add({
                targets: [
                    title,
                    description,
                    tools,
                ],
                duration: 800,
                delay(_, i) {
                    return i * 200;
                },
                opacity: [0, 1],
                translateX: [translateIn, 0],
            });
    };

    React.useEffect(() => {
        const animate = () => {
            const {current: title} = titleRef;
            const {current: description} = descriptionRef;
            const {current: tools} = toolsWrapperRef;
            const {current: browser} = browserRef;

            anime({
                targets: [
                    title,
                    description,
                    browser,
                    tools,
                ],
                duration: 800,
                delay(_, i) {
                    return (i * 200) + 700;
                },
                opacity: [0, 1],
                translateY: ['5vh', 0],
                easing: 'easeOutExpo',
            });
        };

        animate();
        setElement(toolsRef.current);
    }, []);

    React.useEffect(() => {
        if (state.project.index !== project) {
            handleAnimation();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.project.index]);

    useCursor(element);

    return (
        <div className={styles.block} data-test="component-project">
            <header className={styles.content}>
                {projects[project]?.title && (
                    <h2
                        ref={titleRef}
                        className={styles.title}
                        data-title={projects[project].title}
                    >
                        {projects[project].title}
                    </h2>
                )}

                {projects[project]?.description && (
                    <p
                        ref={descriptionRef}
                        className={styles.description}
                        data-title={projects[project].description}
                    >
                        {projects[project].description}
                    </p>
                )}

                {projects[project]?.tools.length > 0 && (
                    <div ref={toolsWrapperRef} className={styles.toolsWrapper}>
                        <Tools ref={toolsRef} items={projects[project].tools} />
                    </div>
                )}

                <Controls
                    isFirst={state.project.isFirst}
                    isLast={state.project.isLast}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                />
            </header>
            <Browser
                ref={browserRef}
                project={projects[project]}
                isFirst={state.project.isFirst}
                isLast={state.project.isLast}
                handlePrev={handlePrev}
                handleNext={handleNext}
            />
        </div>
    );
};

export default Project;
