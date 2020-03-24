import React from 'react';
import PropTypes from 'prop-types';
import styles from './textarea.css';

const Textarea = ({
    onChange,
    onBlur,
    hasError,
    label,
    message = '',
    ...rest
}) => {
    const [length, setLength] = React.useState(0);
    const textareaRef = React.useRef(null);
    const handleHeight = () => {
        if (textareaRef.current) {
            const {current} = textareaRef;

            current.style.height = '0';
            current.style.height = `${current.scrollHeight}px`;
        }
    };
    const handleChange = event => {
        handleHeight();
        onChange(event);
    };

    React.useEffect(() => {
        handleHeight();
        setLength(rest.value?.length);
    }, [rest.value]);

    return (
        <div className={styles.row}>
            {rest.maxLength && (
                <span className={`${styles.counter} ${length > 0 ? styles.edited : ''}`}>{length} / {rest.maxLength}</span>
            )}
            <textarea
                ref={textareaRef}
                id={label}
                className={`${styles.textarea} ${rest?.value?.length > 0 ? styles.value : ''} ${hasError ? styles.error : ''}`}
                data-test="component-textarea"
                onChange={handleChange}
                onBlur={onBlur}
                {...rest}
            />
            <label htmlFor={label} className={`${styles.label} ${hasError ? styles.error : ''}`} data-test="component-label">
                <span className={styles.content}>
                    {label} {hasError && <>{message}</>}
                </span>
            </label>
        </div>
    );
};

Textarea.propTypes = {
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    hasError: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    message: PropTypes.string,
};

export default Textarea;
