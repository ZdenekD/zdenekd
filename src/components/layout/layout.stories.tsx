import Layout from '.';

export default {
    title: 'Layout',
    parameters: {chromatic: {delay: 5000}},
};

export const component = () => (
    <Layout>
        Layout content
    </Layout>
);

component.parameters = {chromatic: {disableSnapshot: true}};
