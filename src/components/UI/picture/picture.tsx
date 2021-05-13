import styles from './picture.module.css';

interface IPicture {
    src: string
    width?: number
    height?: number
    alt?: string
    className?: string
}

const Picture: React.FC<IPicture> = ({
    src,
    width,
    height,
    alt = '',
    className = '',
}) => (
    <picture className={styles.picture} data-test="component-picture">
        <source srcSet={`${src}.avif`} type="image/avif" />
        <source srcSet={`${src}.webp`} type="image/webp" />
        <img
            src={`${src}.png`}
            width={width}
            height={height}
            alt={alt}
            loading="lazy"
            decoding="async"
            className={`${styles.image} ${className}`}
        />
    </picture>
);

export default Picture;
