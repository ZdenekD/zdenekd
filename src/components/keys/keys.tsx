import React from 'react';
import {useRouter} from 'next/router';
import {motion} from 'framer-motion';
import Key from './key';
import pages from '../../data/pages';
import {useMenuState} from '../../state/menu';
import {useProjectState} from '../../state/project';
import {variants} from './keys.animations';
import usePageAction from '../../hooks/usePageAction';
import useProjectAction from '../../hooks/useProjectAction';
import useLocale from '../../hooks/useLocale';
import PagesEnum from '../../enums/PagesEnum';
import DirectionsEnum from '../../enums/DirectionsEnum';
import PageActionsEnum from '../../enums/PageActionsEnum';
import ProjectActionsEnum from '../../enums/ProjectActionsEnum';
import styles from './keys.css';

const Keys: React.FC = () => {
    const [{menu}] = useMenuState();
    const [{project}] = useProjectState();
    const router = useRouter();
    const setPageAction = usePageAction();
    const setProjectAction = useProjectAction();
    const items = Object.keys(pages);
    const isHomepage = router.route === pages[PagesEnum.homepage].route;
    const isProjects = router.route === pages[PagesEnum.projects].route;
    const isLastpage = router.route === pages[items[items.length - 1]].route;
    const isError = router.route === '/404';
    const locale = useLocale();
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
            animate={menu.isOpen ? 'enter' : 'exit'}
            variants={variants}
            className={styles.keys}
            data-test="component-keys"
        >
            <Key
                direction={DirectionsEnum.up}
                label={locale.keys.up}
                disabled={isHomepage || isError}
                onClick={handleKeyUp}
            />
            <div className={styles.key}>
                <Key
                    direction={DirectionsEnum.left}
                    label={locale.keys.left}
                    disabled={!isProjects || project.isFirst}
                    onClick={handleKeyLeft}
                />
                <Key
                    direction={DirectionsEnum.down}
                    label={locale.keys.down}
                    disabled={isLastpage || isError}
                    onClick={handleKeyDown}
                />
                <Key
                    direction={DirectionsEnum.right}
                    label={locale.keys.right}
                    disabled={!isProjects || project.isLast}
                    onClick={handleKeyRight}
                />
            </div>
        </motion.div>
    );
};

export default Keys;
