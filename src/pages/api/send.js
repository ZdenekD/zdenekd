const sendgrid = require('@sendgrid/mail');

export default async function(req, res) {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

    const {name, email, message} = req.body;

    const content = {
        to: 'ditezdenek@pm.me',
        from: 'contact@zdenekd.cz',
        subject: 'Contact form',
        text: message,
        html: `
            <p>
                Zpráva od: <strong>${name}</strong> - <strong>${email}</strong>
            </p>
            <p>
                ${message}
            </p>
        `,
    };

    try {
        await sendgrid.send(content);

        res.status(200).send('Zpráva byla úspěšně odeslána.');
    } catch (error) {
        res.status(400).send('Něco se bohužel po@#$&lo.');
    }
}
