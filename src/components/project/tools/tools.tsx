import Image from 'next/image';
import {forwardRef} from 'react';
import useLocale from '@/hooks/useLocale';
import styles from './tools.module.css';

type IProps = {
    items: string[]
}

const Tools = forwardRef<HTMLUListElement, IProps>(({items}, ref) => {
    const locale = useLocale();

    return (
        <ul ref={ref} className={styles.tools} data-testid="component-tools">
            {items.map((item: string) => (
                <li key={item} className={styles.tool}>
                    <figure className={styles.figure}>
                        <Image
                            src={`/logo/${item}.svg`}
                            width={36}
                            height={36}
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
