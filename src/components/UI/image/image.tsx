import styles from './image.module.css';

interface IProps {
    src: string
    width?: number
    height?: number
    alt?: string
    type?: 'webp' | 'webp, avif' | 'avif',
    className?: string
}

const Image: React.FC<IProps> = ({
    src,
    width,
    height,
    alt = '',
    type,
    className = '',
}) => {
    const getFilename = () => src.replace(/\.gif|\.png|\.jp[e]?g/, '');

    return (
        <picture className={styles.picture} data-test="component-image">
            {type?.includes('avif') && (
                <source srcSet={`${getFilename()}.avif`} type="image/avif" data-test="component-image-avif" />
            )}

            {type?.includes('webp') && (
                <source srcSet={`${getFilename()}.webp`} type="image/webp" data-test="component-image-webp" />
            )}
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading="lazy"
                decoding="async"
                className={`${styles.image} ${className}`}
            />
        </picture>
    );
};

export default Image;
