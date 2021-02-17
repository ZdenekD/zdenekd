import sendgrid from '@sendgrid/mail';
import {NextApiRequest, NextApiResponse} from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
    const {method} = req;

    if (method !== 'POST') {
        res.status(405).end(`Method ${method} is not allowed.`);
    } else {
        sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

        const {name, email, message} = req.body;
        const content = {
            to: process.env.EMAIL_RECIPIENT,
            from: 'contact@zdenekd.cz',
            text: message,
            dynamicTemplateData: {
                subject: '🎉 Zpráva z webu zdenekd🎈cz',
                name,
                email,
                message,
            },
        };

        (async () => {
            try {
                await sendgrid.send(content);

                res.status(200).send('Zpráva byla úspěšně odeslána.');
            } catch (error) {
                res.status(400).send('Něco se pravděpodobně po@#$&lo.');
            }
        })();
    }
}
