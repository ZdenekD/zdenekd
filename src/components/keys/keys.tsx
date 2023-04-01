import {m} from 'framer-motion';
import {useRouter} from 'next/router';
import pages from '@/data/pages';
import {
    DirectionsEnum,
    PageActionsEnum,
    PagesEnum,
    ProjectActionsEnum
} from '@/enums';
import useLocale from '@/hooks/useLocale';
import usePageAction from '@/hooks/usePageAction';
import useProjectAction from '@/hooks/useProjectAction';
import useStore from '@/store';
import Key from './key';
import {animations} from './keys.animations';
import styles from './keys.module.css';

const Keys = () => {
    const {isOpen} = useStore(state => state.menu);
    const {isFirst, isLast} = useStore(state => state.project);
    const router = useRouter();
    const setPageAction = usePageAction();
    const setProjectAction = useProjectAction();
    const items = Object.keys(pages);
    const isHomepage = router.route === pages[PagesEnum.homepage].route;
    const isProjects = router.route === pages[PagesEnum.projects].route;
    const isLastpage = router.route === pages[items[items.length - 1] as PagesEnum].route;
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
        <m.div
            initial={false}
            animate={isOpen ? 'enter' : 'exit'}
            variants={animations}
            className={styles.keys}
            data-testid="component-keys"
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
                    disabled={!isProjects || isFirst}
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
                    disabled={!isProjects || isLast}
                    onClick={handleKeyRight}
                />
            </div>
        </m.div>
    );
};

export default Keys;
