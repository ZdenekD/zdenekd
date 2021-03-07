import Tablet from '.';

export default {title: 'Components/Device/Tablet'};

export const base: React.FC = () => (
    <div style={{maxWidth: '320px'}}>
        <Tablet>
            Table device content
        </Tablet>
    </div>
);
