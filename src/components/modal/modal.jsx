import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styles from './modal.css';

const Modal = ({
    content,
    contentLabel,
    className,
    isOpen,
    handleClose,
}) => ((
    <ReactModal
        isOpen={isOpen}
        contentLabel={contentLabel}
        onRequestClose={handleClose}
        className={`${styles.default} ${className || ''}`}
        bodyOpenClassName={styles.opened}
        overlayClassName={styles.overlay}
        appElement={document.getElementById('__next')}
    >
        {content}
        <button type="button" className={styles.close} onClick={handleClose} aria-label="Zavřít modální okno">&times;</button>
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
    handleClose: PropTypes.func,
};

Modal.defaultProps = {
    contentLabel: '',
    className: '',
};

export default Modal;
