import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Main from '../components/layout/main';

const Error = ({statusCode}) => (
    <Main data-test="component-error">
        <h2>{statusCode}</h2>
        <p>
            Někde se stala chyba. Na opravě se pracuje.
        </p>
    </Main>
);

Error.getInitialProps = ({res, err}) => {
    const statusCode = res?.statusCode || err?.statusCode;

    return {statusCode};
};

Error.propTypes = {statusCode: PropTypes.number};

Error.defaultProps = {statusCode: 404};

export default Error;
