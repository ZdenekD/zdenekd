import React from 'react';
import Main from '../components/layout/main';
import data from '../data/pages';
import Form from '../components/form';

const Contact = () => (
    <Main data-test="component-main">
        <h1 data-test="component-heading">{data.contact.heading}</h1>
        <Form />
    </Main>
);

export default Contact;
