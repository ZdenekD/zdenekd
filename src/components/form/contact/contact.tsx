import {yupResolver} from '@hookform/resolvers/yup';
import anime from 'animejs';
import dynamic from 'next/dynamic';
import React from 'react';
import {
    useForm,
    Controller,
    SubmitHandler
} from 'react-hook-form';
import api from '@/distributors/api';
import usePost from '@/hooks/handlers/usePost';
import useCursor from '@/hooks/useCursor';
import useLocale from '@/hooks/useLocale';
import Button from '@/UI/form-control/button';
import Form from '@/UI/form-control/form';
import Input from '@/UI/form-control/input';
import Textarea from '@/UI/form-control/textarea';
import validation from './contact.validation';
import styles from './contact.module.css';

const Loader = dynamic(() => import('@/UI/loader'));

type IValues = {
    [key: string]: string
}

const ContactForm: React.FC = () => {
    const [catcher, setCatcher] = React.useState<HTMLButtonElement | null>(null);
    const buttonRef = React.useRef<HTMLButtonElement | null>(null);
    const formRef = React.useRef<HTMLFormElement | null>(null);
    const locale = useLocale();
    const schema = validation(locale);
    const {
        control,
        formState: {
            isSubmitting,
            errors,
        },
        reset,
        handleSubmit,
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onTouched',
    });
    const onSuccess = async () => reset();
    const {handlePost} = usePost<IValues>(onSuccess);
    const onSubmit: SubmitHandler<IValues> = async values => {
        if (values.med) {
            return;
        }

        await handlePost(api.send, values);
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
            {isSubmitting && <Loader data-testid="component-contact-loader" />}
            <Form
                ref={formRef}
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
            >
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
