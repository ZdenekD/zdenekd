import {DirectionsEnum} from '@/enums';
import Key from '.';

export default {title: 'Keys/Key'};

export const up = () => (
    <Key direction={DirectionsEnum.up} label="Label" />
);

export const right = () => (
    <Key direction={DirectionsEnum.right} label="Label" />
);

export const down = () => (
    <Key direction={DirectionsEnum.down} label="Label" />
);

export const left = () => (
    <Key direction={DirectionsEnum.left} label="Label" />
);
