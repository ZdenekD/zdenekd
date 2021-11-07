import Tablet from '.';

export default {title: 'Device/Tablet'};

export const component: React.FC = () => (
    <div style={{maxWidth: '320px'}}>
        <Tablet>
            Table device content
        </Tablet>
    </div>
);
