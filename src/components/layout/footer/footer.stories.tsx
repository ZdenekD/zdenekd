import Footer from '.';

export default {
    title: 'Layout/Footer',
    parameters: {chromatic: {delay: 5000}},
};

export const component = () => (
    <Footer />
);

component.parameters = {chromatic: {disableSnapshot: true}};
