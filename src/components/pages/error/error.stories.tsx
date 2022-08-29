import Error from '.';

export default {title: 'Pages/Error'};

export const component = () => (
    <Error />
);

component.parameters = {chromatic: {disableSnapshot: true}};
