import React from 'react';
import styles from './form.css';
import Button from './button';
import Input from './input';
import Textarea from './textarea';
import Loader from '../loader';
import Modal from '../modal';
import * as regex from '../../helpers/regex';

const Form = () => {
    const initialState = {
        name: {
            value: '',
            hasError: false,
            message: ' obsahuje nepovolené znaky',
        },
        email: {
            value: '',
            hasError: false,
            message: ' není ve správném formátu',
        },
        message: {
            value: '',
            hasError: false,
            message: ' obsahuje nepovolené znaky',
        },
        med: {
            value: '',
            hasError: false,
            message: '',
        },
    };
    const [data, setData] = React.useState(initialState);
    const [error, setError] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [isLoader, setLoader] = React.useState(false);
    const handleResponse = ({status}, text) => {
        setMessage(text);

        if (status === 200) {
            setData(initialState);
            setModalOpen(true);
        }
    };
    const handleSubmit = async event => {
        event.preventDefault();

        const hasError = !!Object.keys(data).find(item => data[item].hasError === true);
        const isHoney = !!data.med.value;

        if (!hasError && !isHoney) {
            setLoader(true);

            const map = Object.keys(data).map(item => ({[item]: data[item].value}));
            const input = Object.assign({}, ...map);
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(input),
            });
            const text = await res.text();

            handleResponse(res, text);
        }

        setLoader(false);
        setError(hasError);
    };
    const handleChange = event => {
        event.persist();

        const {name, value} = event.target;

        setData(inputs => ({
            ...inputs,
            [name]: {
                ...inputs[name],
                value,
            },
        }));
    };
    const handleBlur = ({target}) => {
        const {name, value} = target;
        const {pattern} = target.dataset;
        const handleError = () => (value.length > 0 ? !regex[pattern].test(value) : false);

        setData(inputs => ({
            ...inputs,
            [name]: {
                ...inputs[name],
                value,
                hasError: handleError(),
            },
        }));
    };
    const handleClose = () => setModalOpen(false);

    return (
        <>
            {isLoader && <Loader />}
            {message && <Modal content={message} isOpen={isModalOpen} onClose={handleClose} />}
            <form className={`${styles.form} ${isLoader ? styles.disabled : ''}`} data-test="component-form" onSubmit={handleSubmit}>
                <div className="animated-block">
                    <Input
                        required
                        name="name"
                        label="Jméno"
                        type="text"
                        value={data.name.value}
                        hasError={data.name.hasError}
                        message={data.name.message}
                        maxLength="32"
                        data-pattern="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="animated-block">
                    <Input
                        required
                        name="email"
                        label="E-mail"
                        type="email"
                        value={data.email.value}
                        hasError={data.email.hasError}
                        message={data.email.message}
                        maxLength="64"
                        data-pattern="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <Input
                    name="med"
                    label="Med"
                    type="text"
                    className={styles.hidden}
                    hasError={data.med.hasError}
                    autoComplete="off"
                    onChange={handleChange}
                />
                <div className="animated-block">
                    <Textarea
                        required
                        name="message"
                        label="Vzkaz"
                        value={data.message.value}
                        hasError={data.message.hasError}
                        message={data.message.message}
                        maxLength="140"
                        data-pattern="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div className="animated-block">
                    <div className={`${styles.row} ${styles.last}`}>
                        <span className={styles.error}>{error && <>Formulář obsahuje chybně zadané pole.</>}</span>
                        <Button type="submit" aria-label="Odeslat formulář" onSubmit={handleSubmit}>
                            Odeslat
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Form;
