import React from 'react';
import {useRouter} from 'next/router';
import {useForm} from 'react-hook-form';
import anime from 'animejs';
import send from '../../../api/send';
import Form from '../../../UI/form-control/form';
import Input from '../../../UI/form-control/input';
import Textarea from '../../../UI/form-control/textarea';
import Button from '../../../UI/form-control/button';
import Loader from '../../../UI/loader';
import {useGlobalState} from '../../../state';
import {setMessage} from '../../../state/message/actions';
import useCursor from '../../../hooks/useCursor';
import regex from '../../../helpers/regex';
import styles from './contact.css';

interface IValues {
    [key: string]: string
}

const ContactForm: React.FC = () => {
    const [isDisabled, setDisabled] = React.useState<boolean>(false);
    const [catcher, setCatcher] = React.useState<HTMLButtonElement | null>(null);
    const buttonRef = React.useRef<HTMLButtonElement | null>(null);
    const formRef = React.useRef<HTMLFormElement | null>(null);
    const router = useRouter();
    const [, dispatch] = useGlobalState();
    const {register, errors, handleSubmit} = useForm({mode: 'onBlur'});
    const onSubmit = async (values: IValues) => {
        setDisabled(true);

        if (values.med) {
            return;
        }

        const response = await send(values);

        if (response.message) {
            dispatch(setMessage({
                message: {
                    variant: response.variant,
                    content: response.message,
                },
            }));
        }

        router.push('/');
    };

    React.useEffect(() => {
        if (formRef.current) {
            anime({
                targets: [...formRef.current.querySelectorAll('.animated-block')],
                duration: 1200,
                delay(_, index) {
                    return (index * 200) + 1000;
                },
                opacity: [0, 1],
                translateY: ['5vh', 0],
                easing: 'easeOutQuart',
            });
        }

        setCatcher(buttonRef.current);
    }, []);

    useCursor(catcher);

    return (
        <>
            {isDisabled && <Loader data-test="component-contact-loader" />}
            <Form ref={formRef} className={styles.form} data-test="component-contact" onSubmit={handleSubmit(onSubmit)}>
                <div className="animated-block">
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
                        maxlength={30}
                        error={errors.name?.message}
                    />
                </div>
                <div className="animated-block">
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
                        maxlength={90}
                        error={errors.email?.message}
                    />
                </div>
                <div className="animated-block">
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
                        maxlength={255}
                        error={errors.message?.message}
                    />
                </div>
                <input
                    ref={register()}
                    type="text"
                    name="med"
                    autoComplete="off"
                    tabIndex={-1}
                    className={styles.hidden}
                />
                <div className="animated-block">
                    <Button
                        ref={buttonRef}
                        type="submit"
                        className={styles.submit}
                        disabled={isDisabled}
                    >
                        Odeslat
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default ContactForm;
