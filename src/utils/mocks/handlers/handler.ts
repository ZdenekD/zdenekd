import {rest} from 'msw';
import API from '@/utils/config';

const handler = [
    rest.get(`${API}/url`, (_, res, ctx) => res(
        ctx.status(200),
        ctx.json({message: 'Success'})
    )),
];

export default handler;
