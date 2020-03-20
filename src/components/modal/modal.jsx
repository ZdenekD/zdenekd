import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import Button from '../form/button';
import styles from './modal.css';

const Modal = ({
    content,
    contentLabel = '',
    className = '',
    isOpen,
    onClose,
}) => ((
    <ReactModal
        isOpen={isOpen}
        contentLabel={contentLabel}
        className={`${styles.default} ${className || ''}`}
        bodyOpenClassName={styles.opened}
        overlayClassName={styles.overlay}
        appElement={document.getElementById('__next')}
        onRequestClose={onClose}
    >
        {content}
        <Button type="button" className={styles.close} aria-label="Zavřít modální okno" onClick={onClose}>&times;</Button>
    </ReactModal>
));

Modal.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
    contentLabel: PropTypes.string,
    className: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
};

export default Modal;
