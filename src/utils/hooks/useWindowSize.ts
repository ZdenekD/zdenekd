import useEventListener from '@use-it/event-listener';
import {debounce} from 'lodash';
import React from 'react';

type ISize = {
    width: number
    height: number
}

const initialState: ISize = {
    width: 0,
    height: 0,
};
const useWindowSize = (): ISize => {
    const [size, setSize] = React.useState<ISize>(initialState);
    const handleResize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    React.useEffect(() => {
        handleResize();
    }, []);

    useEventListener('resize', debounce(handleResize, 200));

    return size;
};

export default useWindowSize;
