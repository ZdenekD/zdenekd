import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import Heading from '../components/heading';
import Mobile from '../components/device/mobile';
import Tablet from '../components/device/tablet';
import Computer from '../components/device/computer';
import pages from '../data/pages';
import PagesEnum from '../enums/PagesEnum';
import styles from '../assets/styles/pages/index.css';

const Page: React.FC = () => (
    <>
        <Head>
            <meta name="description" content={pages[PagesEnum.homepage].description} />
        </Head>
        <Layout className={styles.root} data-test="component-layout">
            <Heading data-test="component-heading">{pages[PagesEnum.homepage].heading}</Heading>
            <article className={styles.article}>
                <p className={styles.paragraph}>
                    Profesionální hře na&nbsp;klávesnici se&nbsp;věnuji několik let.<br />
                    Pomohu vám převést přání do kódu, kterému rozumí lidé i stroje.
                </p>
            </article>
        </Layout>
        <div className={styles.devicesWrapper}>
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
        </div>
    </>
);

export default Page;
