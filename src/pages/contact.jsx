import React from 'react';
import Main from '../components/layout/main';
import data from '../data/pages';

const Contact = () => (
    <Main data-test="component-main">
        <h2>{data.contact.heading}</h2>
    </Main>
);

export default Contact;
