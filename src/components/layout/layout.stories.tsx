import Layout from '.';

export default {title: 'Layout'};

export const component = () => (
    <Layout>
        Layout content
    </Layout>
);

component.parameters = {chromatic: {disableSnapshot: true}};
