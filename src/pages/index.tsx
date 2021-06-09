import React from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {
    LazyMotion,
    domAnimation,
    m,
    Variants
} from 'framer-motion';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Mobile from '../components/device/mobile';
import Tablet from '../components/device/tablet';
import Computer from '../components/device/computer';
import useWindowSize from '../hooks/useWindowSize';
import pages from '../data/pages';
import PagesEnum from '../enums/PagesEnum';
import LocalesEnum from '../enums/LocalesEnum';
import MediaQueriesEnum from '../enums/MediaQueriesEnum';
import styles from '../assets/styles/pages/index.css';

interface IVariants {
    article: Variants
    devices: Variants
}

const Page: React.FC = () => {
    const router = useRouter();
    const {width} = useWindowSize();
    const lang = router.locale || LocalesEnum.cs;
    const {
        description,
        heading,
        paragraph,
    } = pages[PagesEnum.homepage].locale[lang];
    const animations: IVariants = {
        article: {
            initial: {y: '3vh', opacity: 0},
            enter: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.6,
                    delay: 1.2,
                    ease: [
                        0.215,
                        0.61,
                        0.355,
                        1,
                    ],
                },
            },
            exit: {
                opacity: 0,
                transition: {duration: 0.4},
            },
        },
        devices: {
            initial: {opacity: 0},
            enter: {
                opacity: 1,
                transition: {
                    duration: 0.6,
                    delay: 1.6,
                },
            },
            exit: {
                opacity: 0,
                transition: {duration: 0.4},
            },
        },
    };

    return (
        <>
            <Head>
                <meta name="description" content={description} />
            </Head>
            <Layout className={styles.root} data-test="component-layout">
                <Heading data-test="component-heading">{heading}</Heading>
                <m.article
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    variants={animations.article}
                    className={styles.article}
                >
                    {paragraph && (
                        <p className={styles.paragraph}>
                            {paragraph}
                        </p>
                    )}
                </m.article>
            </Layout>
            <LazyMotion strict features={domAnimation}>
                <m.div
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    variants={animations.devices}
                    className={styles.devicesWrapper}
                >
                    {width > MediaQueriesEnum.xl && (
                        <div className={styles.computer}>
                            <Computer>
                                <video
                                    playsInline
                                    autoPlay
                                    muted
                                    loop
                                    preload="auto"
                                    controls={false}
                                >
                                    <track kind="captions" />
                                    <track kind="description" label="Description" />
                                    <source src='/video/dirtjob.mp4' type="video/mp4" />
                                </video>
                            </Computer>
                        </div>
                    )}
                    {width > MediaQueriesEnum.md && (
                        <div className={styles.mobile}>
                            <Mobile>
                                <video
                                    playsInline
                                    autoPlay
                                    muted
                                    loop
                                    preload="auto"
                                    controls={false}
                                >
                                    <track kind="captions" />
                                    <track kind="description" label="Description" />
                                    <source src='/video/digitalvision_mobile.mp4' type="video/mp4" />
                                </video>
                            </Mobile>
                        </div>
                    )}
                    {width > MediaQueriesEnum.md && (
                        <div className={styles.tablet}>
                            <Tablet>
                                <video
                                    playsInline
                                    autoPlay
                                    muted
                                    loop
                                    preload="auto"
                                    controls={false}
                                >
                                    <track kind="captions" />
                                    <track kind="description" label="Description" />
                                    <source src='/video/tomton_tablet.mp4' type="video/mp4" />
                                </video>
                            </Tablet>
                        </div>
                    )}
                </m.div>
            </LazyMotion>
        </>
    );
};

export default Page;
