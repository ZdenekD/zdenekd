import Error from '.';

export default {
    title: 'Pages/Error',
    parameters: {chromatic: {delay: 5000}},
};

export const component: React.FC = () => (
    <Error />
);
