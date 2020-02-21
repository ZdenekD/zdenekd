import React from 'react';
import Main from '../components/layout/main';
import Project from '../components/project';
import data from '../data/pages';
import styles from './projects.css';

const Projects = () => (
    <Main data-test="component-main">
        <h2>{data.projects.heading}</h2>
        <article className={styles.article}>
            <Project />
        </article>
    </Main>
);

export default Projects;
