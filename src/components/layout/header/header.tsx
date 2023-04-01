import Link from 'next/link';
import Logo from '@/components/logo';
import Menu from '@/components/menu';
import useLocale from '@/hooks/useLocale';
import useStore from '@/store';
import styles from './header.module.css';

const Header = () => {
    const {isAsideAnimated} = useStore(state => state.animation);
    const locale = useLocale();

    return (
        <header className={styles.header} data-testid="component-header">
            <Link legacyBehavior href="/">
                <a
                    href="/"
                    className={`${styles.link} ${isAsideAnimated ? styles.disabled : ''}`}
                    aria-label={locale.header.link}
                >
                    <Logo />
                </a>
            </Link>
            <Menu />
        </header>
    );
};

export default Header;
