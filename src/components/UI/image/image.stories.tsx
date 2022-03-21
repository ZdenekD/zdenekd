import Image from '.';

export default {
    title: 'UI/Image',
    parameters: {chromatic: {delay: 300}},
};

export const component: React.FC = () => (
    <Image src="/image/mobile_fit-s-marky.png" />
);
