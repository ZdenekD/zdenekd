import Homepage from '.';

export default {title: 'Pages/Homepage'};

export const component = () => (
    <Homepage />
);

component.parameters = {chromatic: {disableSnapshot: true}};
