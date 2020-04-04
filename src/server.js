const fastify = require('fastify')({logger: {level: 'error'}});
const Next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const isDevelop = process.env.NODE_ENV !== 'production';

fastify.register((component, opts, next) => {
    const app = Next({dev: isDevelop});
    const handle = app.getRequestHandler();

    app
        .prepare()
        .then(() => {
            if (isDevelop) {
                component.get('/_next/*', (req, reply) => app.handleRequest(req.req, reply.res).then(() => {
                    // eslint-disable-next-line no-param-reassign
                    reply.sent = true;
                }));
            }

            component.all('/*', (req, reply) => handle(req.req, reply.res).then(() => {
                // eslint-disable-next-line no-param-reassign
                reply.sent = true;
            }));

            component.setNotFoundHandler((request, reply) => app.render404(request.req, reply.res).then(() => {
                // eslint-disable-next-line no-param-reassign
                reply.sent = true;
            }));

            next();
        })
        .catch(err => next(err));
});

fastify.listen(port, error => {
    if (error) {
        throw error;
    }

    console.log(`> Ready on http://localhost:${port}`);
});
