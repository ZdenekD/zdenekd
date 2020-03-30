import React from 'react';
import Main from '../components/layout/main';
import data from '../data/pages';

const Homepage = () => (
    <Main data-test="component-main">
        <h2 data-test="component-heading">{data.homepage.heading}</h2>
    </Main>
);

export default Homepage;
