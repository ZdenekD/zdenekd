import Homepage from '.';

export default {
    title: 'Pages/Homepage',
    parameters: {chromatic: {delay: 5000}},
};

export const component = () => (
    <Homepage />
);

component.parameters = {chromatic: {disableSnapshot: true}};
