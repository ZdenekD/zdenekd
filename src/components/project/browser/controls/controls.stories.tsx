import Controls from '.';

export default {title: 'Components/Project/Browser/Controls'};

export const base: React.FC = () => (
    <Controls isFirst={false} isLast={false} />
);

export const disabled: React.FC = () => (
    <Controls isFirst={true} isLast={false} />
);
