import React from 'react';
import useLocale from '../../../hooks/useLocale';
import styles from './tools.module.css';

interface ITools {
    items: string[]
}

const Tools = React.forwardRef<HTMLUListElement, ITools>(({items}, ref) => {
    const locale = useLocale();

    return (
        <ul ref={ref} className={styles.tools} data-test="component-tools">
            {items.map((item: string) => (
                <li key={item} className={styles.tool}>
                    <figure className={styles.figure}>
                        <img
                            src={`/logo_${item}.svg`}
                            width={32}
                            height={32}
                            alt={`${locale.tools}: ${item}`}
                            className={styles.image}
                        />
                        <figcaption className={styles.caption}>{item}</figcaption>
                    </figure>
                </li>
            ))}
        </ul>
    );
});

Tools.displayName = 'Tools';

export default Tools;
