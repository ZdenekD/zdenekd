import {IData} from './types/IApi';

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
};
const options = {
    post: (data: IData): RequestInit => ({
        method: 'POST',
        headers,
        body: JSON.stringify(data),
    }),
};

export default options;
