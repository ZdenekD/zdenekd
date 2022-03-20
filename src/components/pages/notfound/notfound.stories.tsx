import NotFound from '.';

export default {
    title: 'Pages/NotFound',
    parameters: {chromatic: {delay: 10}},
};

export const component: React.FC = () => (
    <NotFound />
);
