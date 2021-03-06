import React from 'react';
import Head from 'next/head';
import {motion, Variants} from 'framer-motion';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Mobile from '../components/device/mobile';
import Tablet from '../components/device/tablet';
import Computer from '../components/device/computer';
import useWindowSize from '../hooks/useWindowSize';
import pages from '../data/pages';
import PagesEnum from '../enums/PagesEnum';
import MediaQueriesEnum from '../enums/MediaQueriesEnum';
import styles from '../assets/styles/pages/index.css';

interface IVariants {
    article: Variants
    devices: Variants
}

const Page: React.FC = () => {
    const {width} = useWindowSize();
    const variants: IVariants = {
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
                <meta name="description" content={pages[PagesEnum.homepage].description} />
            </Head>
            <Layout className={styles.root} data-test="component-layout">
                <Heading data-test="component-heading">{pages[PagesEnum.homepage].heading}</Heading>
                <motion.article
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    variants={variants.article}
                    className={styles.article}
                >
                    <p className={styles.paragraph}>
                        Profesionální hře na&nbsp;klávesnici se&nbsp;věnuji několik let.<br />
                        Pomohu vám převést přání do kódu, kterému rozumí lidé i stroje.
                    </p>
                </motion.article>
            </Layout>
            <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={variants.devices}
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
                                <source src="/video/dirtjob.mp4" type="video/mp4" />
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
                                <source src="/video/digitalvision_mobile.mp4" type="video/mp4" />
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
                                <source src="/video/tomton_tablet.mp4" type="video/mp4" />
                            </video>
                        </Tablet>
                    </div>
                )}
            </motion.div>
        </>
    );
};

export default Page;
