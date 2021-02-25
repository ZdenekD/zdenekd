import React from 'react';
import {motion} from 'framer-motion';
import Browser from './browser';
import Controls from './controls';
import useProjectAction from '../../hooks/useProjectAction';
import ProjectActionsEnum from '../../enums/ProjectActionsEnum';
import {useStateValue} from '../../state';
import useCursor from '../../hooks/useCursor';
import projects from '../../data/projects';
import config from '../../data/config';
import {variants, variant} from './project.animations';
import styles from './project.css';

const Project: React.FC = () => {
    const [element, setElement] = React.useState<HTMLUListElement | null>(null);
    const toolsRef = React.useRef<HTMLUListElement | null>(null);
    const {state} = useStateValue();
    const setProjectAction = useProjectAction();
    const handlePrev = () => {
        setProjectAction(ProjectActionsEnum.prevProject);
    };
    const handleNext = () => {
        setProjectAction(ProjectActionsEnum.nextProject);
    };

    React.useEffect(() => {
        setElement(toolsRef.current);
    }, []);

    useCursor(element);

    return (
        <div className={styles.block} data-test="component-project">
            <motion.header
                initial="initial"
                animate="enter"
                exit="exit"
                variants={variants}
                className={styles.content}
            >
                {projects[state.project.index]?.title && (
                    <motion.h2
                        variants={variant}
                        className={styles.title}
                        data-title={projects[state.project.index].title}
                    >
                        {projects[state.project.index].title}
                    </motion.h2>
                )}

                {projects[state.project.index]?.description && (
                    <motion.p
                        variants={variant}
                        className={styles.description}
                        data-title={projects[state.project.index].description}
                    >
                        {projects[state.project.index].description}
                    </motion.p>
                )}

                {projects[state.project.index]?.tools.length > 0 && (
                    <motion.ul
                        ref={toolsRef}
                        variants={variant}
                        className={styles.tools}
                    >
                        {projects[state.project.index].tools.map(item => (
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
                    </motion.ul>
                )}

                <Controls
                    isFirst={state.project.isFirst}
                    isLast={state.project.isLast}
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                />
            </motion.header>
            <Browser
                project={projects[state.project.index]}
                isFirst={state.project.isFirst}
                isLast={state.project.isLast}
                handlePrev={handlePrev}
                handleNext={handleNext}
            />
        </div>
    );
};

export default Project;
