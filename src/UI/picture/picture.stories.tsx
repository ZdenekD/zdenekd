import Picture from '.';
import config from '../../data/config';

export default {title: 'UI/Picture'};

export const base: React.FC = () => (
    <Picture src={`${config.cloudfront}/image/mobile_tomton`} />
);
