import sendgrid, {MailDataRequired} from '@sendgrid/mail';
import {withSentry} from '@sentry/nextjs';
import {NextApiRequest, NextApiResponse} from 'next';
import locales from '@/data/locales';
import LocalesEnum from '@/enums/LocalesEnum';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const {method} = req;
    const lang = req.headers['content-language'] || 'cs';

    if (method !== 'POST') {
        res.status(405).json({
            status: 405,
            message: locales[lang as LocalesEnum].api.send.notAllowed,
        });
    } else {
        sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

        const {name, email, message} = req.body;
        const content = {
            to: process.env.EMAIL_RECIPIENT,
            from: process.env.EMAIL_SENDER as string,
            templateId: process.env.SENDGRID_TEMPLATE_ID,
            dynamic_template_data: {
                subject: process.env.EMAIL_SUBJECT,
                name,
                email,
                message,
            },
        };

        try {
            await sendgrid.send(content as MailDataRequired);

            res.status(200).json({
                status: 200,
                message: locales[lang as LocalesEnum].api.send.response,
            });
        } catch (error) {
            res.status(400).json({status: 400});
        }
    }
};

export default withSentry(handler);
