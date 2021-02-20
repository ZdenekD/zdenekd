import React from 'react';
import {useRouter} from 'next/router';
import Key from './key';
import pages from '../../data/pages';
import {getPageIndex} from '../../helpers/getPage';
import DirectionsEnum from '../../enums/DirectionsEnum';
import styles from './keys.css';

const Keys: React.FC = () => {
    const router = useRouter();
    const items = Object.keys(pages);
    const index = getPageIndex(router.route);
    const minIndex = 0;
    const maxIndex = items.length - 1;
    const handleKeyUp = () => {
        if (index - 1 >= minIndex) {
            router.push(`/${pages[items[index - 1]].slug}`);
        }
    };
    const handleKeyDown = () => {
        if (index + 1 <= maxIndex) {
            router.push(`/${pages[items[index + 1]].slug}`);
        }
    };

    return (
        <div className={styles.keys} data-test="component-keys">
            <Key direction={DirectionsEnum.up} label="Předchozí stránka" disabled={index === minIndex} onClick={handleKeyUp} />
            <div className={styles.key}>
                <Key direction={DirectionsEnum.left} label="Předchozí projekt" />
                <Key direction={DirectionsEnum.down} label="Následující stránka" disabled={index === maxIndex} onClick={handleKeyDown} />
                <Key direction={DirectionsEnum.right} label="Následující projekt" />
            </div>
        </div>
    );
};

export default Keys;
