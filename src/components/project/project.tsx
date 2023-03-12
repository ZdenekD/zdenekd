import anime from 'animejs';
import {useRouter} from 'next/router';
import React from 'react';
import projects from '@/data/projects';
import LocalesEnum from '@/enums/LocalesEnum';
import ProjectActionsEnum from '@/enums/ProjectActionsEnum';
import useProjectAction from '@/hooks/useProjectAction';
import useStore from '@/store/index';
import Browser from './browser';
import Controls from './controls';
import Tools from './tools';
import styles from './project.module.css';

const Project: React.FC = () => {
    const router = useRouter();
    const {
        index: project,
        isFirst,
        isLast,
    } = useStore(state => state.project);
    const [index, setIndex] = React.useState<number>(project);
    const titleRef = React.useRef<HTMLHeadingElement | null>(null);
    const descriptionRef = React.useRef<HTMLParagraphElement | null>(null);
    const toolsWrapperRef = React.useRef<HTMLDivElement | null>(null);
    const toolsRef = React.useRef<HTMLUListElement | null>(null);
    const browserRef = React.useRef<HTMLDivElement | null>(null);
    const controlsRef = React.useRef<HTMLUListElement | null>(null);
    const setProjectAction = useProjectAction();
    const lang = router.locale || LocalesEnum.cs;
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
        const translateIn = project > index ? '10vw' : '-10vw';
        const translateOut = project > index ? '-5vw' : '5vw';

        anime.timeline({easing: 'easeOutExpo'})
            .add({
                targets: [
                    title,
                    description,
                    tools,
                ],
                duration: 200,
                opacity: [1, 0],
                translateX: [0, translateOut],
                begin() {
                    setIndex(project);
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
        const {current: title} = titleRef;
        const {current: description} = descriptionRef;
        const {current: tools} = toolsWrapperRef;
        const {current: browser} = browserRef;
        const {current: controls} = controlsRef;

        anime({
            targets: [
                title,
                description,
                browser,
                tools,
                controls,
            ],
            duration: 800,
            delay(_, i) {
                return (i * 200) + 800;
            },
            opacity: [0, 1],
            translateY: ['5vh', 0],
            easing: 'easeOutExpo',
        });
    }, []);

    React.useEffect(() => {
        if (project !== index) {
            handleAnimation();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [project]);

    return (
        <div className={styles.block} data-testid="component-project">
            <header className={styles.content}>
                {projects[index]?.title ? (
                    <h2
                        ref={titleRef}
                        className={styles.title}
                        data-title={projects[index].title}
                    >
                        {projects[index].title}
                    </h2>
                ) : null}

                {projects[index]?.locale[lang].description ? (
                    <p
                        ref={descriptionRef}
                        className={styles.description}
                        data-title={projects[index].locale[lang].description}
                    >
                        {projects[index].locale[lang].description}
                    </p>
                ) : null}

                {projects[index]?.tools.length > 0 && (
                    <div ref={toolsWrapperRef} className={styles.toolsWrapper}>
                        <Tools ref={toolsRef} items={projects[index].tools} />
                    </div>
                )}

                <Controls
                    ref={controlsRef}
                    isFirst={isFirst}
                    isLast={isLast}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                />
            </header>
            <Browser
                ref={browserRef}
                project={projects[index]}
                isFirst={isFirst}
                isLast={isLast}
                handlePrev={handlePrev}
                handleNext={handleNext}
            />
        </div>
    );
};

export default Project;
