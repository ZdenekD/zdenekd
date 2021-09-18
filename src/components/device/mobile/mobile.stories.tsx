import Mobile from '.';

export default {title: 'Device/Mobile'};

export const base: React.FC = () => (
    <div style={{maxWidth: '180px'}}>
        <Mobile>Mobile device content</Mobile>
    </div>
);
