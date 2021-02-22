import Browser from './browser';
import Controls from './controls';
import useProjectAction from '../../hooks/useProjectAction';
import ProjectActionsEnum from '../../enums/ProjectActionsEnum';
import {useStateValue} from '../../state';
import projects from '../../data/projects';
import config from '../../data/config';
import styles from './project.css';

const Project: React.FC = () => {
    const {state} = useStateValue();
    const setProjectAction = useProjectAction();
    const handlePrev = () => {
        setProjectAction(ProjectActionsEnum.prevProject);
    };
    const handleNext = () => {
        setProjectAction(ProjectActionsEnum.nextProject);
    };

    return (
        <div className={styles.block} data-test="component-project">
            <header className={styles.content}>
                {projects[state.project.index]?.title && (
                    <h2 className={styles.title} data-title={projects[state.project.index].title}>
                        {projects[state.project.index].title}
                    </h2>
                )}

                {projects[state.project.index]?.description && (
                    <p className={styles.description} data-title={projects[state.project.index].description}>
                        {projects[state.project.index].description}
                    </p>
                )}

                {projects[state.project.index]?.tools.length > 0 && (
                    <ul className={styles.tools}>
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
                    </ul>
                )}

                <Controls
                    handlePrev={handlePrev}
                    handleNext={handleNext}
                />
            </header>
            <Browser
                project={projects[state.project.index]}
                handlePrev={handlePrev}
                handleNext={handleNext}
            />
        </div>
    );
};

export default Project;
