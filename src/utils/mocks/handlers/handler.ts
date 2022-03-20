import {rest} from 'msw';

const handler = [
    rest.post('/api/send', (_, res, ctx) => res(
        ctx.status(200),
        ctx.json({message: 'Success'})
    )),
];

export default handler;
