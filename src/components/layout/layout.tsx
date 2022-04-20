import {LazyMotion, domAnimation} from 'framer-motion';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import Cursor from '@/components/cursor';
import useKeyboard from '@/hooks/useKeyboard';
import useLocale from '@/hooks/useLocale';
import useSwipe from '@/hooks/useSwipe';
import useWheel from '@/hooks/useWheel';
import {useMessageState} from '@/store/message';
import Footer from './footer';
import Header from './header';
import Meta from './meta';
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
    const [{message}] = useMessageState();
    const locale = useLocale();

    useKeyboard();
    useWheel();
    useSwipe();

    return (
        <>
            <Head>
                <Meta />
            </Head>
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
            <Alert variant={message.variant} isOpen={!!message.content} timeout={4}>
                {message.content}
            </Alert>
            <Cursor />
        </>
    );
};

export default Layout;
