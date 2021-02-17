import React from 'react';
import {useRouter} from 'next/router';
import {useForm} from 'react-hook-form';
import send from '../../../api/send';
import Form from '../../../UI/form-control/form';
import Input from '../../../UI/form-control/input';
import Textarea from '../../../UI/form-control/textarea';
import Button from '../../../UI/form-control/button';
import Loader from '../../../UI/loader';
import {useStateValue} from '../../../state';
import ActionsEnum from '../../../state/message/type/actions';
import regex from '../../../helpers/regex';
import VariantsEnum from '../../../enums/VariantsEnum';
import styles from './contact.css';

interface IValues {
    [key: string]: string
}

const ContactForm: React.FC = () => {
    const [isDisabled, setDisabled] = React.useState(false);
    const router = useRouter();
    const {dispatch} = useStateValue();
    const {register, errors, handleSubmit} = useForm({mode: 'onBlur'});
    const onSubmit = async (values: IValues) => {
        setDisabled(true);

        if (values.med) {
            return;
        }

        const response = await send(values);

        if (response.message) {
            dispatch({
                type: ActionsEnum.save,
                payload: {
                    message: {
                        variant: VariantsEnum.success,
                        content: response.message,
                    },
                },
            });
        }

        router.push('/');
    };

    return (
        <>
            {isDisabled && <Loader data-test="component-loader" />}
            <Form className={styles.form} data-test="component-contact" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    ref={register({
                        pattern: {
                            value: regex.name,
                            message: 'Jsou zadány nepovolené znaky.',
                        },
                    })}
                    required
                    name="name"
                    label="Jméno"
                    disabled={isDisabled}
                    maxLength={30}
                    error={errors.name?.message}
                />
                <Input
                    ref={register({
                        pattern: {
                            value: regex.email,
                            message: 'E-mail není zadán ve správném formátu.',
                        },
                    })}
                    required
                    name="email"
                    label="E-mail"
                    type="email"
                    disabled={isDisabled}
                    maxLength={90}
                    error={errors.email?.message}
                />
                <Textarea
                    ref={register({
                        pattern: {
                            value: regex.text,
                            message: 'Jsou zadány nepovolené znaky.',
                        },
                    })}
                    required
                    name="message"
                    label="Zpráva"
                    disabled={isDisabled}
                    maxLength={255}
                    error={errors.message?.message}
                />
                <Input
                    ref={register()}
                    name="med"
                    label="Med"
                    autoComplete="off"
                    className={styles.hidden}
                />
                <Button type="submit" variant={VariantsEnum.info} className={styles.submit} disabled={isDisabled}>Odeslat</Button>
            </Form>
        </>
    );
};

export default ContactForm;
