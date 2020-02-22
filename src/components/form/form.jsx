import React, {useState} from 'react';
import styles from './form.css';
import Input from './input';
import Textarea from './textarea';

const Form = () => {
    const initialState = {
        name: '',
        email: '',
        message: '',
    };
    const [data, setData] = useState(initialState);
    const handleSubmit = event => {
        event.preventDefault();

        console.log(data);
    };
    const handleChange = event => {
        event.persist();

        const {name, value} = event.target;

        setData(inputs => ({
            ...inputs,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form} data-test="component-form">
            <div className={styles.row}>
                <Input
                    name="name"
                    label="Jméno"
                    type="text"
                    value={data.name}
                    handleChange={handleChange}
                    placeholder="Oblíbené jméno"
                    required
                />
            </div>
            <div className={styles.row}>
                <Input
                    name="email"
                    label="E-mail"
                    type="email"
                    value={data.email}
                    handleChange={handleChange}
                    placeholder="Kontaktní e-mail"
                    required
                />
            </div>
            <div className={styles.row}>
                <Textarea
                    name="message"
                    label="Vzkaz"
                    value={data.message}
                    handleChange={handleChange}
                    placeholder="Vzkaz, požadavek nebo trocha poezie"
                    required
                />
            </div>
            <button type="submit">Odeslat</button>
        </form>
    );
};

export default Form;
