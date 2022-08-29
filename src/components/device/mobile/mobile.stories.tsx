import Mobile from '.';

export default {title: 'Device/Mobile'};

export const component = () => (
    <div style={{maxWidth: '180px'}}>
        <Mobile>Mobile device content</Mobile>
    </div>
);

component.parameters = {chromatic: {delay: 300}};
