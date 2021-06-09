import sendgrid, {MailDataRequired} from '@sendgrid/mail';
import {NextApiRequest, NextApiResponse} from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
    const {method} = req;

    if (method !== 'POST') {
        res.status(405).json({status: 405});
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

        (async () => {
            try {
                await sendgrid.send(content as MailDataRequired);

                res.status(200).json({status: 200});
            } catch (error) {
                res.status(400).json({status: 400});
            }
        })();
    }
}
