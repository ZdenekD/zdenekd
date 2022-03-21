import Mobile from '.';

export default {
    title: 'Device/Mobile',
    parameters: {chromatic: {delay: 300}},
};

export const component: React.FC = () => (
    <div style={{maxWidth: '180px'}}>
        <Mobile>Mobile device content</Mobile>
    </div>
);
