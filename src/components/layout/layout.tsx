import {LazyMotion, domAnimation} from 'framer-motion';
import dynamic from 'next/dynamic';
import Cursor from '@/components/cursor';
import getResponseVariant from '@/helpers/getResponseVariant';
import useKeyboard from '@/hooks/useKeyboard';
import useLocale from '@/hooks/useLocale';
import useSwipe from '@/hooks/useSwipe';
import useWheel from '@/hooks/useWheel';
import useStore from '@/store';
import Footer from './footer';
import Header from './header';
import Section from './section';
import styles from './layout.module.css';
import type {PropsWithChildren} from 'react';

const Alert = dynamic(() => import('@/UI/alert'));
const Aside = dynamic(() => import('@/components/aside'));
const Curtain = dynamic(() => import('@/components/curtain'));

type IProps = {
    className?: string
}

const Layout = ({children, className = ''}: PropsWithChildren<IProps>) => {
    const {status, message} = useStore(state => ({status: state.alert.status, message: state.alert.message}));
    const locale = useLocale();

    useKeyboard();
    useWheel();
    useSwipe();

    return (
        <>
            <main className={`${styles.main} ${className}`} data-testid="component-layout">
                <LazyMotion strict features={domAnimation}>
                    <Header />
                    <Section>
                        <noscript>
                            {locale.noscript}
                        </noscript>
                        {children}
                    </Section>
                    <Footer />
                    <Curtain />
                </LazyMotion>
            </main>
            <Aside />
            <Alert
                variant={status ? getResponseVariant(status) : undefined}
                isVisible={!!message}
                timeout={4}
            >
                {message}
            </Alert>
            <Cursor />
        </>
    );
};

export default Layout;
