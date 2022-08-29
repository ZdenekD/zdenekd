import NotFound from '.';

export default {title: 'Pages/NotFound'};

export const component = () => (
    <NotFound />
);

component.parameters = {chromatic: {disableSnapshot: true}};
