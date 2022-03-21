import Loader from '.';

export default {
    title: 'UI/Loader',
    parameters: {chromatic: {delay: 3}},
};

export const component: React.FC = () => (
    <Loader />
);
