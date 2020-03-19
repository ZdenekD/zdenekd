import React from 'react';
import {Provider} from 'react-redux';
import App from 'next/app';
import anime from 'animejs';
import withRedux from 'next-redux-wrapper';
import './_index.css';
import styles from './_app.css';
import initStore from '../store';
import {handleAppAnimation} from '../store/app/actions';
import {getPage} from '../helpers/getPage';

class Application extends App {
    constructor(props) {
        super(props);

        this.curtainRef = React.createRef();

        console.info('%cHello Underworld! Authorship is attributed to %c01011010 01100100 01100101 01101110 01100101 01101011 01000100. %cYou can try this >> https://bit.ly/31QKTyy', 'color: #9cd9f2', 'color: #c8e49b', 'color: #9cd9f2');
    }

    componentDidUpdate() {
        const {store} = this.props;
        const {dispatch} = store;

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
                        dispatch(handleAppAnimation({isAnimated: true}));
                    }
                },
            })
            .add({
                duration: 800,
                translateY: [0, '100%'],
                complete() {
                    dispatch(handleAppAnimation({isAnimated: false}));
                },
            }, '-=200');
    }

    render() {
        const {Component, store, router} = this.props;
        const page = getPage(router.route);

        return (
            <Provider store={store}>
                <main className={`${styles.main} ${styles[page]} main`}>
                    <Component />
                    <i className={styles.curtain} ref={this.curtainRef}></i>
                </main>
            </Provider>
        );
    }
}

export default withRedux(initStore)(Application);