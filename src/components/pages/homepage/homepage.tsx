import {
    LazyMotion,
    domAnimation,
    m
} from 'framer-motion';
import Head from 'next/head';
import {useRouter} from 'next/router';
import Computer from '@/components/device/computer';
import Mobile from '@/components/device/mobile';
import Tablet from '@/components/device/tablet';
import Layout from '@/components/layout';
import Heading from '@/components/layout/heading';
import pages from '@/data/pages';
import {
    LocalesEnum,
    MediaQueriesEnum,
    PagesEnum
} from '@/enums';
import useWindowSize from '@/hooks/useWindowSize';
import animations from './homepage.animations';
import styles from './homepage.module.css';

const Homepage = () => {
    const router = useRouter();
    const {width} = useWindowSize();
    const lang = router.locale as LocalesEnum || LocalesEnum.cs;
    const {
        description,
        heading,
        paragraph,
    } = pages[PagesEnum.homepage].locale[lang];

    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <title>{heading} | ZdenekD</title>
            </Head>
            <Layout className={styles.root}>
                <Heading data-testid="component-heading">{heading}</Heading>
                <m.article
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    variants={animations.article}
                    className={styles.article}
                >
                    {paragraph ? (
                        <p className={styles.paragraph}>
                            {paragraph}
                        </p>
                    ) : null}
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
                    {width >= MediaQueriesEnum.xl && (
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
                                    <source src='/video/tomton-interior.mp4' type="video/mp4" />
                                </video>
                            </Computer>
                        </div>
                    )}
                    {width >= MediaQueriesEnum.md && (
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
                    {width >= MediaQueriesEnum.md && (
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

export default Homepage;
