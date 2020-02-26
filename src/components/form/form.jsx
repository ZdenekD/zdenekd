import React, {useState} from 'react';
import styles from './form.css';
import Button from './button';
import Input from './input';
import Textarea from './textarea';
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
    };
    const [data, setData] = useState(initialState);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');
    const handleResponse = ({status}, text) => {
        setMessage(text);

        if (status === 200) {
            setData(initialState);
        }
    };
    const handleSubmit = async event => {
        event.preventDefault();

        const hasError = !!Object.keys(data).find(item => data[item].hasError === true);

        if (!hasError) {
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

    return (
        <>
            {message && <strong>{message}</strong>}
            <form onSubmit={handleSubmit} className={styles.form} data-test="component-form">
                <div className={styles.row}>
                    <Input
                        name="name"
                        label="Jméno"
                        type="text"
                        value={data.name.value}
                        hasError={data.name.hasError}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        message={data.name.message}
                        maxLength="32"
                        data-pattern="name"
                        required
                    />
                </div>
                <div className={styles.row}>
                    <Input
                        name="email"
                        label="E-mail"
                        type="email"
                        value={data.email.value}
                        hasError={data.email.hasError}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        message={data.email.message}
                        maxLength="64"
                        data-pattern="email"
                        required
                    />
                </div>
                <div className={styles.row}>
                    <Textarea
                        name="message"
                        label="Vzkaz"
                        value={data.message.value}
                        hasError={data.message.hasError}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        message={data.message.message}
                        maxLength="140"
                        data-pattern="text"
                        required
                    />
                </div>
                <div className={styles.row}>
                    <span className={styles.error}>{error && <>Formulář obsahuje chybně zadané pole.</>}</span>
                    <Button type="submit" onSubmit={handleSubmit}>
                        Odeslat
                    </Button>
                </div>
            </form>
        </>
    );
};

export default Form;
