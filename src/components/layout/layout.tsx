import {LazyMotion, domAnimation} from 'framer-motion';
import dynamic from 'next/dynamic';
import React from 'react';
import Cursor from '@/components/cursor';
import handleResponseStatus from '@/helpers/handleResponseStatus';
import useKeyboard from '@/hooks/useKeyboard';
import useLocale from '@/hooks/useLocale';
import useSwipe from '@/hooks/useSwipe';
import useWheel from '@/hooks/useWheel';
import useStore from '@/store/index';
import Footer from './footer';
import Header from './header';
import Section from './section';
import styles from './layout.module.css';

const Alert = dynamic(() => import('@/UI/alert'));
const Aside = dynamic(() => import('@/components/aside'));
const Curtain = dynamic(() => import('@/components/curtain'));

type IProps = {
    children?: React.ReactNode
    className?: string
}

const Layout: React.FC<IProps> = ({children, className = ''}) => {
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
                variant={status ? handleResponseStatus(status) : undefined}
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
