import Image from '.';

export default {
    title: 'UI/Image',
    parameters: {chromatic: {delay: 3}},
};

export const component: React.FC = () => (
    <Image src="/image/mobile_fit-s-marky.png" />
);

export const types: React.FC = () => (
    <>
        <Image width={240} height={135} src="/image/mobile_avprague.png" type="webp" />
        <br />
        <Image width={240} height={135} src="/image/mobile_digitalvision.png" type="webp, avif" />
        <br />
        <Image width={240} height={135} src="/image/mobile_tomton.png" type="avif" />
    </>
);
