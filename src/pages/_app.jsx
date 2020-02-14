import React from 'react';
import {Provider} from 'react-redux';
import App from 'next/app';
import anime from 'animejs';
import withRedux from 'next-redux-wrapper';
import './index.css';
import styles from './_app.css';
import initStore from '../store';
import {handleAppAnimation} from '../store/app/actions';
import {getPage} from '../helpers/getPage';

class Application extends App {
    constructor(props) {
        super(props);

        this.curtainRef = React.createRef();
    }

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return {pageProps};
    }

    componentDidUpdate() {
        const {store} = this.props;
        const {dispatch} = this.props.store;

        anime
            .timeline({
                targets: this.curtainRef.current,
                easing: 'easeOutCubic',
            })
            .add({
                duration: 600,
                opacity: [0, 1],
                begin() {
                    const {isAnimated} = store.getState().app;

                    if (!isAnimated) {
                        dispatch(handleAppAnimation(true));
                    }
                },
            })
            .add({
                duration: 800,
                translateY: [0, '100%'],
                complete() {
                    dispatch(handleAppAnimation(false));
                },
            }, '-=200');
    }

    render() {
        const {Component, pageProps, store, router} = this.props;
        const [page] = getPage(router.route);

        return (
            <Provider store={store}>
                <main className={`${styles.main} ${styles[page]}`}>
                    <div className={styles.curtain} ref={this.curtainRef}></div>
                    <Component {...pageProps} />
                </main>
            </Provider>
        );
    }
}

export default withRedux(initStore)(Application);
