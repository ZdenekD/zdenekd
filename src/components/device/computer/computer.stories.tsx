import Computer from '.';

export default {title: 'Components/Device/Computer'};

export const base: React.FC = () => (
    <div style={{maxWidth: '800px'}}>
        <Computer>Computer device content</Computer>
    </div>
);
