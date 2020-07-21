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
                component.get('/_next/*', (req, res) => handle(req.raw, res.raw).then(() => {
                    // eslint-disable-next-line no-param-reassign
                    res.sent = true;
                }));
            }

            component.all('/*', (req, res) => handle(req.raw, res.raw).then(() => {
                // eslint-disable-next-line no-param-reassign
                res.sent = true;
            }));

            component.setNotFoundHandler((req, res) => app.render404(req.raw, res.raw).then(() => {
                // eslint-disable-next-line no-param-reassign
                res.sent = true;
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
