import React from 'react';
import Main from '../components/layout/main';
import data from '../data/pages';

const Projects = () => (
    <Main data-test="component-main">
        <h2>{data.projects.heading}</h2>
    </Main>
);

export default Projects;
