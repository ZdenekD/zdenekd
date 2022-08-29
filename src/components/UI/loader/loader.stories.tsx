import Loader from '.';

export default {title: 'UI/Loader'};

export const component = () => (
    <Loader />
);

component.parameters = {chromatic: {delay: 300}};
