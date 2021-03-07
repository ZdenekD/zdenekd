import React from 'react';
import config from '../../../data/config';
import styles from './tools.css';

interface ITools {
    items: string[]
}

const Tools = React.forwardRef<HTMLUListElement, ITools>(({items}, ref) => (
    <ul ref={ref} className={styles.tools} data-test="component-tools">
        {items.map((item: string) => (
            <li key={item} className={styles.tool}>
                <figure className={styles.figure}>
                    <img
                        src={`${config.cloudfront}/logo_${item}.svg`}
                        width={32}
                        height={32}
                        alt={`Technologie použitá v projektu: ${item}`}
                        className={styles.image}
                    />
                    <figcaption className={styles.caption}>{item}</figcaption>
                </figure>
            </li>
        ))}
    </ul>
));

Tools.displayName = 'Tools';

export default Tools;
