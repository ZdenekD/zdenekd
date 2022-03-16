import {yupResolver} from '@hookform/resolvers/yup';
import anime from 'animejs';
import {useRouter} from 'next/router';
import React from 'react';
import {
    useForm,
    Controller,
    SubmitHandler
} from 'react-hook-form';
import send from '@/api/send';
import VariantsEnum from '@/enums/VariantsEnum';
import useCursor from '@/hooks/useCursor';
import useLocale from '@/hooks/useLocale';
import {useMessageState} from '@/store/message';
import Button from '@/UI/form-control/button';
import Form from '@/UI/form-control/form';
import Input from '@/UI/form-control/input';
import Textarea from '@/UI/form-control/textarea';
import Loader from '@/UI/loader';
import validation from './contact.validation';
import styles from './contact.module.css';

interface IValues {
    [key: string]: string
}

const ContactForm: React.FC = () => {
    const [catcher, setCatcher] = React.useState<HTMLButtonElement | null>(null);
    const buttonRef = React.useRef<HTMLButtonElement | null>(null);
    const formRef = React.useRef<HTMLFormElement | null>(null);
    const router = useRouter();
    const [, {setMessage}] = useMessageState();
    const locale = useLocale();
    const schema = validation(locale);
    const {
        control,
        formState: {
            isSubmitting,
            errors,
        },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onTouched',
    });
    const onSubmit: SubmitHandler<IValues> = async values => {
        if (values.med) {
            return;
        }

        const response = await send(values);

        if (response.status) {
            const variant: {[key: string]: VariantsEnum} = {
                200: VariantsEnum.success,
                400: VariantsEnum.warning,
                405: VariantsEnum.danger,
            };

            setMessage({
                message: {
                    variant: variant[response.status],
                    content: locale.status[response.status],
                },
            });
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
            {isSubmitting && <Loader data-test="component-contact-loader" />}
            <Form ref={formRef} className={styles.form} data-test="component-contact" onSubmit={handleSubmit(onSubmit)}>
                <div className="animated-block">
                    <Controller
                        name="name"
                        control={control}
                        render={({field}) => (
                            <Input
                                {...field}
                                required
                                label={locale.form.input.name.label}
                                disabled={isSubmitting}
                                maxlength={30}
                                error={errors.name?.message}
                            />
                        )}
                    />

                </div>
                <div className="animated-block">
                    <Controller
                        name="email"
                        control={control}
                        render={({field}) => (
                            <Input
                                {...field}
                                required
                                label={locale.form.input.email.label}
                                type="email"
                                disabled={isSubmitting}
                                maxlength={90}
                                error={errors.email?.message}
                            />
                        )}
                    />
                </div>
                <div className="animated-block">
                    <Controller
                        name="message"
                        control={control}
                        render={({field}) => (
                            <Textarea
                                {...field}
                                required
                                name="message"
                                label={locale.form.input.message.label}
                                disabled={isSubmitting}
                                maxlength={255}
                                error={errors.message?.message}
                            />
                        )}
                    />
                </div>
                <Controller
                    name="med"
                    control={control}
                    render={({field}) => (
                        <input
                            {...field}
                            type="text"
                            name="med"
                            autoComplete="off"
                            tabIndex={-1}
                            className={styles.hidden}
                        />
                    )}
                />
                <div className="animated-block">
                    <Button
                        ref={buttonRef}
                        type="submit"
                        className={styles.submit}
                        disabled={isSubmitting}
                    >
                        {locale.form.submit}
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default ContactForm;
