import NotFound from '.';

export default {
    title: 'Pages/NotFound',
    parameters: {chromatic: {delay: 5000}},
};

export const component = () => (
    <NotFound />
);

component.parameters = {chromatic: {disableSnapshot: true}};
