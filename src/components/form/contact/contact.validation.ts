import * as yup from 'yup';
import {
    AnyObjectSchema,
    BooleanSchema,
    StringSchema
} from 'yup';
import regex from '@/helpers/regex';
import {ILocale} from '@/types/locales';

type IValidate<R = BooleanSchema | StringSchema> = (locale: ILocale | undefined) => R;

const validation: IValidate<AnyObjectSchema> = locale => yup.object().shape({
    name: yup
        .string()
        .matches(regex.name, locale?.form.input.name.error)
        .required(locale?.form.input.name.required),
    email: yup
        .string()
        .matches(regex.email, locale?.form.input.email.error)
        .required(locale?.form.input.email.required),
    message: yup
        .string()
        .matches(regex.text, locale?.form.input.message.error)
        .required(locale?.form.input.message.required),
    med: yup
        .string()
        .max(0),
});

export default validation;
