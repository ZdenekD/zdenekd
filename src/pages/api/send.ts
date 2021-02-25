import sendgrid from '@sendgrid/mail';
import {NextApiRequest, NextApiResponse} from 'next';
import VariantsEnum from '../../enums/VariantsEnum';

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
    const {method} = req;

    if (method !== 'POST') {
        res.status(405).json({
            message: 'Není povoleno.',
            variant: VariantsEnum.danger,
        });
    } else {
        sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

        const {name, email, message} = req.body;
        const content = {
            to: process.env.EMAIL_RECIPIENT,
            from: 'contact@zdenekd.cz',
            text: message,
            templateId: process.env.SENDGRID_TEMPLATE_ID,
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

                res.status(200).json({
                    message: 'Zpráva byla úspěšně odeslána.',
                    variant: VariantsEnum.success,
                });
            } catch (error) {
                res.status(400).json({
                    message: 'Něco se pravděpodobně po@#$&lo.',
                    variant: VariantsEnum.warning,
                });
            }
        })();
    }
}
