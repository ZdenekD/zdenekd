import options from './options';
import {IData, IResponse} from './types/IApi';

const send = (data: IData): Promise<IResponse> => fetch('/api/send', options.post(data))
    .then(response => response.json());

export default send;
