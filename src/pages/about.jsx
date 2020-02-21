import React from 'react';
import Main from '../components/layout/main';
import data from '../data/pages';

const About = () => (
    <Main data-test="component-main">
        <h2>{data.about.heading}</h2>
    </Main>
);

export default About;
