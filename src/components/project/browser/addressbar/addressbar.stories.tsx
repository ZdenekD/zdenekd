import Addressbar from '.';

export default {title: 'Components/Project/Browser/Addressbar'};

export const https: React.FC = () => (
    <Addressbar url="https://url" />
);

export const http: React.FC = () => (
    <Addressbar url="http://url" />
);
