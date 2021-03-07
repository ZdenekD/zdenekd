import Key from '.';
import DirectionsEnum from '../../../enums/DirectionsEnum';

export default {title: 'UI/Keys/Key'};

export const up: React.FC = () => (
    <Key direction={DirectionsEnum.up} label="Label" />
);

export const right: React.FC = () => (
    <Key direction={DirectionsEnum.right} label="Label" />
);

export const down: React.FC = () => (
    <Key direction={DirectionsEnum.down} label="Label" />
);

export const left: React.FC = () => (
    <Key direction={DirectionsEnum.left} label="Label" />
);
