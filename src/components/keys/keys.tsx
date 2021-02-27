import React from 'react';
import {useRouter} from 'next/router';
import {motion} from 'framer-motion';
import Key from './key';
import pages from '../../data/pages';
import {useStateValue} from '../../state';
import {variants} from './keys.animations';
import usePageAction from '../../hooks/usePageAction';
import useProjectAction from '../../hooks/useProjectAction';
import PagesEnum from '../../enums/PagesEnum';
import DirectionsEnum from '../../enums/DirectionsEnum';
import PageActionsEnum from '../../enums/PageActionsEnum';
import ProjectActionsEnum from '../../enums/ProjectActionsEnum';
import styles from './keys.css';

const Keys: React.FC = () => {
    const {state} = useStateValue();
    const router = useRouter();
    const setPageAction = usePageAction();
    const setProjectAction = useProjectAction();
    const items = Object.keys(pages);
    const isHomepage = router.route === pages[PagesEnum.homepage].route;
    const isProjects = router.route === pages[PagesEnum.projects].route;
    const isLastpage = router.route === pages[items[items.length - 1]].route;
    const handleKeyUp = () => {
        setPageAction(PageActionsEnum.prevPage);
    };
    const handleKeyDown = () => {
        setPageAction(PageActionsEnum.nextPage);
    };
    const handleKeyLeft = () => {
        setProjectAction(ProjectActionsEnum.prevProject);
    };
    const handleKeyRight = () => {
        setProjectAction(ProjectActionsEnum.nextProject);
    };

    return (
        <motion.div
            initial={false}
            animate={state.menu.isOpen ? 'animate' : 'exit'}
            variants={variants}
            className={styles.keys}
            data-test="component-keys"
        >
            <Key
                direction={DirectionsEnum.up}
                label="Předchozí stránka"
                disabled={isHomepage}
                onClick={handleKeyUp}
            />
            <div className={styles.key}>
                <Key
                    direction={DirectionsEnum.left}
                    label="Předchozí projekt"
                    disabled={!isProjects}
                    onClick={handleKeyLeft}
                />
                <Key
                    direction={DirectionsEnum.down}
                    label="Následující stránka"
                    disabled={isLastpage}
                    onClick={handleKeyDown}
                />
                <Key
                    direction={DirectionsEnum.right}
                    label="Následující projekt"
                    disabled={!isProjects}
                    onClick={handleKeyRight}
                />
            </div>
        </motion.div>
    );
};

export default Keys;
