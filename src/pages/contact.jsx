import React from 'react';
import Main from '../components/layout/main';
import data from '../data/pages';
import Form from '../components/form';

const Contact = () => (
    <Main data-test="component-main">
        <h2>{data.contact.heading}</h2>
        <Form />
    </Main>
);

export default Contact;
